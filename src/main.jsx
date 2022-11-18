import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Paths from './routes/Paths'

const root = document.getElementById('root')
createRoot(root).render(
  <>

    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
