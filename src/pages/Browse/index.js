import React, { useState, useEffect, useRef } from 'react'
import { find, isEmpty } from 'lodash'
import { Dropdown } from 'rsuite'
import Layout from '../../components/App/Layout'
import { MovieCard } from '../../components/Movie'
import useFetchMovies from '../../hooks/useFetchMovies'
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

const initConditions = {
  sort: 'rating_total_amount',
  feature: '',
  start_year: 1980,
  end_year: 2021,
}

const Browse = () => {
  const [isBottom, setBottom] = useState(false)
  const [conditions, setConditions] = useState(initConditions)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const bottomRef = useRef(null)

  const handleTypeSelect = (value) => {
    const typeId = find(movieTypes, {type: value}).id
    setConditions({...conditions, feature: typeId})
  }

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
    <Layout className={`search-wrapper ${loading && 'loading'}`}>
      <div className="sort-wrapper">
        <Dropdown
          title={find(movieTypes, {id: conditions.feature}).name}
          activeKey={find(movieTypes, {id: conditions.feature}).type}
          onSelect={handleTypeSelect}>
          {movieTypes.map(({ id, name, type }, index) => {
            return (<Dropdown.Item key={id+index} eventKey={type} children={name} />)
          })}
        </Dropdown>
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
