import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Episodes from './Episodes'

const Seasons = ({ id }) => {
  const [query, setQuery] = useState([])
  const apiSeasons = `https://api.tvmaze.com/shows/${id}/seasons`

  const getShow = async () => {
    const response = await axios(apiSeasons)
    if (response.status === 200) {
      setQuery(response.data)
    } else {
      return <Navigate to='/404' />
    }
  }

  useEffect(() => {
    getShow()
  }, [])
  console.log('aqui es: ', query)
  return (
    <>
      <div>
        {
            query.map((element, index) => (
              <div key={index}>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingOne'>
                    <button className='fs-3 accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>
                      Season {element.number}
                    </button>
                  </h2>
                  <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                    <div className='accordion-body'>
                      <Episodes idSeason={element.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default Seasons
