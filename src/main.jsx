import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import FileUpload from './components/FileUpload.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FileUpload />
  </StrictMode>,
)
