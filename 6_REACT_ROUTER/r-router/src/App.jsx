import Navbar from '../components/Navbar'
import './App.css'

import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar/>
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>

    </>
  )
}

export default App;
