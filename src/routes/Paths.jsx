import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import Documentation from '../pages/Documentation'
import Show from '../pages/Show'
import Error from '../pages/Error'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<App />} />
      <Route path='/doc' element={<Documentation />} />
      <Route path='/show/:id' element={<Show />} />
      <Route path='/404' element={<Error />} />
      <Route path='*' element={<Navigate to='/404' />} />

    </Routes>
  )
}
export default Paths
