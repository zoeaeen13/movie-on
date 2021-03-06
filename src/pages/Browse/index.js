import React, { useState, useEffect, useRef } from 'react'
import { isEmpty, find, debounce } from 'lodash'
import dayjs from 'dayjs'
import { Dropdown, RangeSlider, Col, Cascader, RadioGroup, Radio } from 'rsuite'
import Layout from '../../components/App/Layout'
import { MovieCard } from '../../components/Movie'
import { MOVIE_TYPE, RANKING_TYPE, SCORE_OPTIONS } from '../../constants'
import { getMovies } from '../../api'
import { removeCards } from '../../utils'
import { gaEvent } from '../../services/GA'

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
    gaEvent('browse', `select movie by ${type}`, { label: value })
    setConditions({...conditions, [type]: value})
  }

  const debouncedOnYearChange = debounce(([start_year, end_year]) => {
    gaEvent('browse', 'select movie by year', { label: `${start_year}-${end_year}` })
    setConditions({...conditions, start_year, end_year })
  }, 500)

  const onTypeSelect = (value) => {
    const featureId = find(movieTypes, {type: value}).id
    handleConditionChange('feature', featureId)
  }

  const onRankingTypeChange = (value) => {
    handleConditionChange('sort', value)
  }

  const fetchMovies = async (start) => {
    setLoading(true)
    const params = {...conditions}
    params.start = start ? start : 0
    console.log(params)
    const response = await getMovies(params)
    if (response.status !== 200) return console.log(response)
    const { data } = response
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
    if (isBottom && movies.length) {
      gaEvent('browse', 'scroll to bottom')
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
              onClick={() => gaEvent('browse', 'click to select movie type')}
              onSelect={onTypeSelect}>
              {movieTypes.map(({ name, type }, index) => {
                return (<Dropdown.Item key={type} eventKey={type} children={name} />)
              })}
            </Dropdown>
            <RadioGroup
              inline
              name="radioList"
              value={conditions.value}
              appearance="picker"
              onChange={onRankingTypeChange}
            >
              {RANKING_TYPE.map(({ name, value, color }) => {
                return <Radio style={{ backgroundColor: `${(conditions.sort === value) ? color : ''}` }} key={value} value={value}>{name}</Radio>
              })}
            </RadioGroup>
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
              }
              fetchMovies()
            }}
            onSelect={(item, selectedPaths) => {
              if (selectedPaths.length < 2) return
              const [parent, child] = selectedPaths
              handleConditionChange(parent.value , child.value[child.value.length - 1])  
            }}
            onClick={() => gaEvent('browse', 'click to limit movie-ranking score')}
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
