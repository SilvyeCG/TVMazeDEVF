import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Loading from './Loading'
import EpisodeDetails from './EpisodeDetails';

const Episodes = ({ idSeason }) => {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)

  const apiEpisodes = `https://api.tvmaze.com/shows/${idSeason}/seasons`

  const getEpisodes = async () => {
    try {
      const request = await fetch(apiEpisodes)
      const response = await request.json()
      setEpisodes(response)
      console.log('EPISODES', response)
    } catch (error) {
      return <Navigate to='/404' />
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getEpisodes()
  }, [])

  if (loading) return <Loading />

  return (
    <>
      <div>
        {
            episodes.map((episode, index) => (
              <div key={index}>
                <p className='fs-4 ms-3'><b className='fs-4 me-5'>{episode.number}</b> <Link id='episodeURL'>{episode.url}</Link>  </p>
              </div>
            ))
        }
      </div>

    </>
  )
}

export default Episodes
