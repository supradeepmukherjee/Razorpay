import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Success = lazy(() => import('./pages/Success.jsx'))
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/success' element={<Success />} />
        </Routes>
      </Suspense>
    </Router >
  )
}

export default App