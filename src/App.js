//REACT
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

// CSS
import './App.css'

// PAGES
import LogIn from './pages/LogIn'

// COMPONENTS
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()
  const renderNavBar = location.pathname !== '/'
  return (
    <div className="App">
      {renderNavBar && <NavBar/>}
      <main>
        <Routes>
          <Route path='/' element={<LogIn />} />
        </Routes>
      </main>
    </div>
  )
}

export default App