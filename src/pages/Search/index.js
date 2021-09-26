import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { MovieCard } from '../../components/Movie'
import { getMoviesByKeyword } from '../../api'
import useRouter from '../../hooks/useRouter'
import Layout from '../../components/App/Layout'

const Search = ({ searchWord }) => {
  const [movies, setMovies] = useState([])
  const changeRouter = useRouter()

  useEffect(() => {
    if (isEmpty(searchWord)) return changeRouter('/')

    // fetch
    const fetchMovies = async (keyword) => {
      const { data } = await getMoviesByKeyword(keyword)
      setMovies(data)
    }
    fetchMovies(searchWord)

  }, [searchWord])

  return (
    <Layout className="search-wrapper">
      {!isEmpty(searchWord) && (
        <>
        {movies.length && <p className="search-hint">找到與「 <span>{searchWord}</span> 」有關的影片</p>}
        {!movies.length && <p className="search-hint">找不到與「 <span>{searchWord}</span> 」有關的影片</p>}
        <div className="movie-gallery">
          {movies.map((data) => {
            return (
              <MovieCard key={data.main_taiwan_name} data={data} />
          )})}
        </div>
        </>
      )}
    </Layout>
  );
};

export default Search;
