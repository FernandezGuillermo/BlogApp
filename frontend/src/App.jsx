import './App.css'
import NavBar from './components/NavBar.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Single from './components/Single.jsx'
import Write from './components/Wite.jsx'
import { createBrowserRouter,RouterProvider,Route, Outlet } from 'react-router-dom'


const Layout = () => {
  return(
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      }
    ]
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])

function App() {

  return (
    <div className='app'>
      <div className='container'>
      <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App;


