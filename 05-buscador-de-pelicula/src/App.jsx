import './App.css'
import { useMovies } from './hooks/useMoviess'
import { Movies } from './component/Moviess.jsx'
import { useState, useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, uptadeSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect (() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null) 
  }, [search])

  return{ search, uptadeSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, uptadeSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  
  const debaunceGetMovies =  useCallback(  
    debounce(search=> {
      console.log('search', search)
      getMovies({ search })
  }, 500)
  , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    uptadeSearch(newSearch)
    debaunceGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input 
              style={{ border: '1px solid transparent',
               borderColor: error ? 'red':'transparent' }} 
               onChange={handleChange} value={search}  name='query' type="text" placeholder='avengers, starwars...'
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type='submit' >buscar</button>
          </form>
          {error && <p style={{color:' red '}}>{error}</p>}
      </header>

      <main>
        {
          loading? <p>cargando...</p> : <Movies movies={movies} />
        }   
      </main>
    </div>
  )
  
}

export default App
