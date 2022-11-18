import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Characters from '../Components/Commons/Characters'
import Seasons from '../Components/Commons/Seasons'
import Navbar from '../Layouts/Navbar'
import Loading from '../Components/Commons/Loading'
// col-12 col-md-6 col-lg-4
const Show = () => {
  const { id } = useParams()
  const [show, setShow] = useState([])
  const [loading, setLoading] = useState(true)

  const apiShow = `https://api.tvmaze.com/shows/${id}`

  const getShow = async () => {
    try {
      const request = await fetch(apiShow)
      const response = await request.json()
      console.log(response)
      setShow(response)
    } catch (error) {
      return <Navigate to='/404' />
    } finally {
      setLoading(false)
    }

    // const response = await axios.get(apiShow)
    // if (response.status === 200) {
    //   setShow(response.data)
    //   // setLoading(false)
    // } else {
    //   return <Navigate to='/404' />
    // }
  }

  useEffect(() => {
    getShow()
  }, [])

  if (loading) return <Loading />

  return (
    <>
      <div className='header mb-5'>
        <Navbar />
      </div>
      <div className='container'>
        <section className='row'>
          {/* <div className='col-12 col-md-4 col-lg-4'>
            <img id='imgShow' src={show.image.original} alt={show.name} srcSet='' />
          </div> */}
          <div className='col-12 col-md-8 col-lg-8'>
            <div className='row'>
              <div className='col'>
                <h1 className='mb-4'><b className='text-danger'>Name:</b> {show.name} </h1>
                <h5 className='mb-4'><b className='fs-4 text-danger'>Status:</b> {show.status} </h5>
                <h5 className='mb-4'><b className='fs-4 text-danger'>Summary:</b> {show.summary} </h5>
                <h5 className='mb-4'><b className='fs-4 text-danger'>Website:</b> {show.officialSite} </h5>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4 col-lg-4'>
            <img id='imgShow' src={show.image.original} alt={show.name} srcSet='' />
          </div>
        </section>
        <section className='mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col me-3'>
                <h1 className='fs-2 text-danger mb-4'>Characters</h1>
                <Characters id={id} />
              </div>
              <div className='col ms-3'>
                <h1 className='text-danger mb-4'>Seasons</h1>
                <div className='accordion accordion-flush' id='accordionFlushExample'>
                  <Seasons id={id} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Show
