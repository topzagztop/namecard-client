import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import AppRouter from './routes/AppRouter.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById('root')).render(
    <>
        <AppRouter />
        <ToastContainer />
    </>
)
