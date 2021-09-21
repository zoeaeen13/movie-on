import { useState, useEffect } from 'react'
import { getMovies } from '../api'

export default function useFetchMovies(condition = {}) {
  const [movies, setMovies] = useState([])
  condition.sort = 'rating_total_amount'

  const fetchPhoto = async () => {
    const { data } = await getMovies(condition)
    setMovies(data)
  }
  useEffect(() => {
    fetchPhoto()
  }, [])

  return [movies]
}