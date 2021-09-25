import React, { useState, useEffect, useRef, useCallback } from 'react'
import { cloneDeep, isEmpty, find, debounce } from 'lodash'
import { Dropdown, RangeSlider, Col, Cascader } from 'rsuite'
import Layout from '../../components/App/Layout'
import { MovieCard } from '../../components/Movie'
import { MOVIE_TYPE } from '../../constants'
import { getMovies } from '../../api'
import { removeCards } from '../../utils'

// 整理電影類型
const movieTypes = Object.values(MOVIE_TYPE)
movieTypes.unshift({
  id: '',
  name: '全部類型',
  type: 'all',
},)

// 熱門參考
const rankingType = [
  {
    name: '熱門參考',
    value: 'rating_total_amount',
  },
  {
    name: 'IMDB',
    value: 'imdb_rating',
  },
  {
    name: '豆瓣',
    value: 'douban_rating',
  },
  {
    name: ' 爛番茄',
    value: 'audience_rating',
  },
]

// 選擇評分
const score = [
  {
    value: 'imdb_rating',
    label: 'IMDB',
    children: [
      {
        value: 'imdb_rating=9',
        label: '9 分以上',
      },
      {
        value: 'imdb_rating=8',
        label: '8 分以上',
      },
      {
        value: 'imdb_rating=7',
        label: '7 分以上',
      },
      {
        value: 'imdb_rating=6',
        label: '6 分以上',
      },
      {
        value: 'imdb_rating=5',
        label: '5 分以上',
      },
      {
        value: 'imdb_rating=4',
        label: '4 分以上',
      },
      {
        value: 'imdb_rating=3',
        label: '3 分以上',
      },
    ]
  },
  {
    value: 'douban_rating',
    label: '豆瓣',
    children: [
      {
        value: 'douban_rating=9',
        label: '9 分以上',
      },
      {
        value: 'douban_rating=8',
        label: '8 分以上',
      },
      {
        value: 'douban_rating=7',
        label: '7 分以上',
      },
      {
        value: 'douban_rating=6',
        label: '6 分以上',
      },
      {
        value: 'douban_rating=5',
        label: '5 分以上',
      },
      {
        value: 'douban_rating=4',
        label: '4 分以上',
      },
      {
        value: 'douban_rating=3',
        label: '3 分以上',
      },
    ]
  },
  {
    value: 'tomato_rating',
    label: '爛番茄',
    children: [
      {
        value: 'tomato_rating=9',
        label: '90 分以上',
      },
      {
        value: 'tomato_rating=8',
        label: '80 分以上',
      },
      {
        value: 'tomato_rating=7',
        label: '70 分以上',
      },
      {
        value: 'tomato_rating=6',
        label: '60 分以上',
      },
      {
        value: 'tomato_rating=5',
        label: '50 分以上',
      },
      {
        value: 'tomato_rating=4',
        label: '40 分以上',
      },
      {
        value: 'tomato_rating=3',
        label: '30 分以上',
      },
    ]
  },
]

const startYear = 1980
const endYear = 2021

const Browse = () => {
  const [isBottom, setBottom] = useState(false)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const bottomRef = useRef(null)
  const [conditions, setConditions] = useState({
    sort: 'rating_total_amount',
    feature: '',
    start_year: startYear,
    end_year: endYear,
  })

  const handleConditionChange = (type, value) => {
    setConditions({...conditions, [type]: value})
  }

  const handleYearChange = ([start_year, end_year]) => {
    setConditions({...conditions, start_year, end_year })
  }

  const debouncedChangeHandler = debounce(handleYearChange, 500)



  const fetchMovies = async (start) => {
    setLoading(true)
    const params = {...conditions}
    params.start = start ? start : 0
    console.log(params)
    const { data } = await getMovies(params)
    setMovies(start ? movies.concat(data) : data)
    setLoading(false)
  }

  useEffect(() => {
    removeCards() // remove floating cards
    fetchMovies()
  }, [conditions])

  useEffect(() => {
    if (isBottom && movies.length) {
      fetchMovies(movies.length)
    }
  }, [isBottom])

  useEffect(() => {
    const options = { threshold: [1] }
    const intersectionObserver = new IntersectionObserver((entries) => {
      const element = entries[0]
      setBottom(element.isIntersecting)
    }, options)
    if (bottomRef.current) intersectionObserver.observe(bottomRef.current)

    return () => {
      intersectionObserver.disconnect()
    }
  }, [])

  return (
    <Layout className={`browse-wrapper ${loading && 'loading'}`}>
      <div className="conditions-wrapper">
        <Col md={2}>
          <div style={{ height: 400, position: 'fixed' }}>
            <RangeSlider
              defaultValue={[1980, 2021]}
              min={1980}
              max={2021}
              graduated
              vertical
              renderMark={mark => {
                if (mark % 5 === 0) return <span>{mark}</span>
              }}
              onChange={debouncedChangeHandler}
            />
          </div>
        </Col>
        <div className="flex-space-between">
          <div>
            <Dropdown
              title={find(movieTypes, {id: conditions.feature}).name}
              activeKey={conditions.feature}
              onSelect={(value) => handleConditionChange('feature', find(movieTypes, {type: value}).id)}>
              {movieTypes.map(({ id, name, type }, index) => {
                return (<Dropdown.Item key={id+index} eventKey={type} children={name} />)
              })}
            </Dropdown>
            <Dropdown
              title={find(rankingType, {value: conditions.sort}).name}
              activeKey={conditions.value}
              onSelect={(value) => handleConditionChange('sort', value)}>
              {rankingType.map(({ name, value }) => {
                return (<Dropdown.Item key={value} eventKey={value} children={name} />)
              })}
            </Dropdown>
          </div>
          <Cascader
            data={score}
            appearance="default"
            placeholder="篩選評分"
            style={{ width: 'min-content', backgroundColor: '#141414'}}
            searchable={false}
            onChange={(value) => {
              if (isEmpty(value)) {
                delete conditions.imdb_rating
                delete conditions.douban_rating
                delete conditions.tomato_rating
                fetchMovies()
              }
            }}
            onSelect={(item, selectedPaths) => {
              if (selectedPaths.length < 2) return
              const [parent, child] = selectedPaths
              handleConditionChange(parent.value , child.value[child.value.length -1])  
            }}
            renderValue={() => {
              let value = ''
              const { imdb_rating, douban_rating, tomato_rating } = conditions
              if (imdb_rating) value += `IMDB / ${imdb_rating} 分以上`
              if (douban_rating) value += `${isEmpty(value) ? '' : '、'}豆瓣 / ${douban_rating} 分以上`
              if (tomato_rating) value += `${isEmpty(value) ? '' : '、'}爛番茄 / ${tomato_rating} 分以上`
              return value
            }}
          />
        </div>
      </div>
      <div className="movie-gallery">
        {movies.map((data) => {
          return (
            <MovieCard key={data.id} data={data} />
        )})}
      </div>
      <div className="page-bottom" ref={bottomRef} />
    </Layout>
  );
};

export default Browse;
