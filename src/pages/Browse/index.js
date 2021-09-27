import React, { useState, useEffect, useRef } from 'react'
import { isEmpty, find, debounce } from 'lodash'
import dayjs from 'dayjs'
import { Dropdown, RangeSlider, Col, Cascader } from 'rsuite'
import Layout from '../../components/App/Layout'
import { MovieCard } from '../../components/Movie'
import { MOVIE_TYPE, RANKING_TYPE, SCORE_OPTIONS } from '../../constants'
import { getMovies } from '../../api'
import { removeCards } from '../../utils'

// 設定初始年份
const startYear = 1980
const endYear = Number(dayjs().format('YYYY'))

// 整理電影類型
const movieTypes = Object.values(MOVIE_TYPE)
movieTypes.unshift({
  id: '',
  name: '全部類型',
  type: 'all',
},)

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

  const debouncedOnYearChange = debounce(([start_year, end_year]) => {
    setConditions({...conditions, start_year, end_year })
  }, 500)

  const fetchMovies = async (start) => {
    setLoading(true)
    const params = {...conditions}
    params.start = start ? start : 0
    console.log(params)
    const { data } = await getMovies(params)
    setMovies(start ? movies.concat(data) : data)
    setLoading(false)
  }

  const renderScoreValues = () => {
    let value = ''
    const { imdb_rating, douban_rating, tomato_rating } = conditions
    if (imdb_rating) value += `IMDB / ${imdb_rating} 分以上`
    if (douban_rating) value += `${isEmpty(value) ? '' : '、'}豆瓣 / ${douban_rating} 分以上`
    if (tomato_rating) value += `${isEmpty(value) ? '' : '、'}爛番茄 / ${tomato_rating}0 分以上`
    return value
  }

  useEffect(() => {
    removeCards()
    fetchMovies()
  }, [conditions])

  useEffect(() => {
    if (isBottom && movies.length) fetchMovies(movies.length)
  }, [isBottom])

  useEffect(() => {
    const options = { threshold: [1] }
    const intersectionObserver = new IntersectionObserver((entries) => {
      const element = entries[0]
      setBottom(element.isIntersecting)
    }, options)
    if (bottomRef.current) intersectionObserver.observe(bottomRef.current)

    // cleanup
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
              defaultValue={[startYear, endYear]}
              min={1980}
              max={2021}
              graduated
              vertical
              renderMark={mark => {
                if (mark % 5 === 0) return <span>{mark}</span>
              }}
              onChange={debouncedOnYearChange}
            />
          </div>
        </Col>
        <div className="flex-space-between">
          <div>
            <Dropdown
              title={find(movieTypes, {id: conditions.feature}).name}
              activeKey={conditions.feature}
              onSelect={(value) => handleConditionChange('feature', find(movieTypes, {type: value}).id)}>
              {movieTypes.map(({ name, type }, index) => {
                return (<Dropdown.Item key={type} eventKey={type} children={name} />)
              })}
            </Dropdown>
            <Dropdown
              style={{ backgroundColor: find(RANKING_TYPE, {value: conditions.sort}).color }}
              title={find(RANKING_TYPE, {value: conditions.sort}).name}
              activeKey={conditions.value}
              onSelect={(value) => handleConditionChange('sort', value)}>
              {RANKING_TYPE.map(({ name, value }) => {
                return (<Dropdown.Item key={value} eventKey={value} children={name} />)
              })}
            </Dropdown>
          </div>
          <Cascader
            data={SCORE_OPTIONS}
            appearance="default"
            placeholder="篩選評分"
            style={{ width: 'min-content', backgroundColor: '#141414'}}
            searchable={false}
            onChange={(value) => {
              if (isEmpty(value)) {
                delete conditions.imdb_rating
                delete conditions.douban_rating
                delete conditions.tomato_rating
                // omit(conditions, ['imdb_rating', 'douban_rating', 'tomato_rating'])
              }
              fetchMovies()
            }}
            onSelect={(item, selectedPaths) => {
              if (selectedPaths.length < 2) return
              const [parent, child] = selectedPaths
              handleConditionChange(parent.value , child.value[child.value.length - 1])  
            }}
            renderValue={renderScoreValues}
          />
        </div>
      </div>
      <div className="movie-gallery">
        {movies.map((data) => {
          return (
            <MovieCard key={data.main_taiwan_name} data={data} />
        )})}
      </div>
      <div className="page-bottom" ref={bottomRef} />
    </Layout>
  );
};

export default Browse;
