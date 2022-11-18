import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetData = (data) => {
  const baseURL = 'https://api.tvmaze.com/'
  const searchQuery = 'search/shows?q='

  const [shows, setShows] = useState([])

  const getShowsQuery = async () => {
    const response = await axios(`${baseURL}${searchQuery}${data}`)
    if (response.status === 200) {
      setShows(response.data)
    }
  }

  // const movieQuery = (movies) => {
  //   {
  //      movies.map(movie =&gt;
  //                 movie.show.image ?
  //                     &lt;Movie title={movie.show.name} image={movie.show.image.medium} /&gt; :
  //                 null)
  //   }
  // }

  useEffect(() => {
    getShowsQuery()
  }, [data])

  console.log('here usegetdata', shows)
  return { shows }
}

export default useGetData
