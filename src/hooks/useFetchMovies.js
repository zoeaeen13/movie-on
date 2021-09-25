import { useState, useEffect } from 'react'
import { getMovies } from '../api'

export default function useFetchMovies(condition = {}) {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  if(!condition.hasOwnProperty('start')) condition.start = 0
  if(!condition.hasOwnProperty('sort')) condition.sort = 'rating_total_amount'

  const fetchMovies = async () => {
    setLoading(true)
    const { data } = await getMovies(condition)
    setMovies(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchMovies()
  }, [])

  return [ movies, loading ]
}