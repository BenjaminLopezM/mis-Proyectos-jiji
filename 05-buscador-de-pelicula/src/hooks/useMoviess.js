import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/moviesss'
import { Movies } from '../component/Moviess'

export function useMovies ({ search, sort }) {
    const [movies, setMovies] = useState([])   
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null) 
    const previusSearch = useRef(search) 

    const getMovies = useCallback (async ({ search })  => {
      if(search === previusSearch.current) return
      
      try {
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      }catch {
        setError(e.message)
      } finally {
        setLoading(false)
      }
     }, [])

    const sortedMovies = useMemo(() =>  {
      return sort
      ? [...movies].sort((a, b) =>a.year.localeCompare(b.year))
       : movies
    }, [sort, movies])
    
  
  
    return {movies: sortedMovies, getMovies, loading}
  }
  