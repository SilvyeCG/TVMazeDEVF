import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Characters = ({ id }) => {
  const apiUrl = `https://api.tvmaze.com/shows/${id}/cast`

  const [characters, setCharacter] = useState([])

  const getShowsQuery = async () => {
    try {
      const request = await fetch(apiUrl)
      const response = await request.json()
      console.log(response)
      setCharacter(response)
    } catch (error) {
      return <Navigate to='/404' />
    } finally {
      // setLoading(false)
    }
  }

  useEffect(() => {
    getShowsQuery()
  }, [])

  return (
    <div>
      {
        characters.map((character, index) => (
          <div key={index} className='col-12 col-md-12 col-lg-12'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{character.person.name}</h5>
                <p className='card-text'><b>As:</b> {character.character.name}</p>
              </div>
              {/* <img src={character.image.original} className='card-img-top' alt={character.person.name} /> */}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Characters
