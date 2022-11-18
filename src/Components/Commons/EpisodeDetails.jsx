import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Loading from './Loading'

const EpisodeDetails = ({ id }) => {
  const [episodeData, setEpisode] = useState([])
  const [loading, setLoading] = useState(true)

  const apiEpisode = `https://api.tvmaze.com/episodes/${id}`

  const getEpisodes = async () => {
    try {
      const request = await fetch(apiEpisode)
      const response = await request.json()
      console.log(response)
      setEpisode(response)
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

  return { episodeData }
}

export default EpisodeDetails
