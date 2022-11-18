import Navbar from "../Layouts/Navbar"

const Documentation = () => {
  return (
    <div>
      <div className='Series'>
        <Navbar />
      </div>
      <div className='container'>
        <h2 className='text-white text-center mt-4 pt-5'>TVMaze Documentation</h2>
        <div className='row'>
          <p className='text-center mt-4'>
            <img className='img-fluid' id='tvmazeLogo' src='../../public/assets/tvmaze.png' alt='tvmaze-logo' />
          </p>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='mt-5 fs-3 text-center'>TV Maze
              is a free user driven TV database curated by TV lovers all over
              the world. You can track your favorite shows from anywhere.
              TV Maze provide an API that can be used by anyone or service like Kodi to
              retrieve TV Metadata, show/episode/cast images, and much more.
            </p>
            <p className='mt-5 pt-5 fs-5 text-center'>If you want to know more about TV Maze API, please follow the link:</p>
            <p className='mt-5 fs-4 text-center'><a className='text-info' href='https://www.tvmaze.com/api'>https://www.tvmaze.com/api</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
