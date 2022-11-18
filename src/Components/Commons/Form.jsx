import { useState } from 'react'

const Form = ({ getQuery }) => {
  const [querySearch, setQuerySearch] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    getQuery(querySearch)
  }

  return (
    <div className='formSearch mb-5' onSubmit={handleChange}>
      <form className='d-flex' abineguid='1B78BAA4F3D74319AA193B30F386BD92'>
        <label id='labelForm' className='text-center me-sm-2 fs-4 mt-5 ms-4'>What do you want to watch today?</label>
        <input
          className='form-control me-sm-2 fs-4 mt-5'
          type='text'
          placeholder='Search TV Show...'
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
        />
        <button className='text-center fs-4 btn btn-info my-2 my-sm-0 me-2' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Form
