import React, { useState, useEffect, useRef, useCallback } from 'react'
import { find, debounce } from 'lodash'
import { Dropdown, RangeSlider, Col } from 'rsuite'
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

// 參考評分
const rankingType = [
  {
    name: '參考',
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

const startYear = 1980
const endYear = 2021

const Browse = () => {
  const [isBottom, setBottom] = useState(false)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const bottomRef = useRef(null)
  const [year, setYear] = useState([startYear, endYear])
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
    setConditions({
      ...conditions,
      start_year,
      end_year,
    })
  }

  const debouncedChangeHandler = useCallback(
    debounce(handleYearChange, 500)
  , [])


  const fetchMovies = async (start) => {
    setLoading(true)
    const params = {...conditions}
    params.start = start ? start : 0
    const { data } = await getMovies(params)
    if (start) {
      setMovies(movies.concat(data))
    } else {
      setMovies(data)
    }
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
          <div style={{ height: 400, position: 'absolute' }}>
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
        <div className="flex-column">
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
