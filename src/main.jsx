import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>



     {/* toast */}
     <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
            />
  </StrictMode>,
)