
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'

function App() {


  const router = createBrowserRouter(
    [
      {path:"/",
        element: <>
        <Navbar/> 
        <Home/>
        </>
      },
      {
        path:"/pastes",
        element:<>
        <Navbar/>
        <Pastes/>
        </>
          
       
      },
      {

        path:"/pastes/:id",
        element: <>
          <Navbar/>
          <ViewPaste/>
        </>
      }
    ]
  )

  return (
   <div>
    
< RouterProvider router={router}/>

   </div>
  )
}

export default App
