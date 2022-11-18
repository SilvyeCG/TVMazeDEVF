import React from 'react'
import { Link } from 'react-router-dom'

const CardShows = (...args) => {
  console.log('ARGUMENTS', args)
  return (
    <div>
      <Link className='card mb-3' id='showsResultsImg'>
        <h1>{args.show.name}</h1>
        <img
          src={args.show.image.original}
          className='card-img-top'
          alt={args.show.name}
        />
      </Link>

    </div>
  )
}

export default CardShows
