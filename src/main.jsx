import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import "./tw.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import {Provider} from 'react-redux'
import { store } from './app/store.js'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    
    <App />
    <ToastContainer />
    </Provider>
  </StrictMode>,
)
>>>>>>> 9fc7285bb19f73ba22a69e77e3be173836693507
