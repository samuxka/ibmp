import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import History from './Pages/History/History'
import Faq from './Pages/Faq/Faq'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'
import MissionPage from './Pages/Home/Missions/MissionPage'

function App() {
  return (
    <>
      <Router>
        <div>
          <Sidebar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/History' element={<History/>}></Route>
              <Route path='/Perguntas-frequentes' element={<Faq/>}></Route>
              <Route path='/Mission/:id' element={<MissionPage/>}></Route>
            </Routes>
            <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
