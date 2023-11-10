//REACT
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

// CSS
import './App.css'

// PAGES
import LogIn from './pages/LogIn'
import Inicio from './pages/Inicio'

// COMPONENTS
import NavBar from './components/NavBar/NavBar'

//CONTEXT
import { UserProvider } from './context/UserContext'
import PrivateRoute from './context/PrivateRoute'

// API
export const URL = 'http://localhost:8080/'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppContent/>
      </BrowserRouter>
    </UserProvider>
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
          <Route path='/inicio' element={<PrivateRoute><Inicio /></PrivateRoute>} />
        </Routes>
      </main>
    </div>
  )
}

export default App