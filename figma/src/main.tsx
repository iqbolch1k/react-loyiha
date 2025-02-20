import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelpCenter from './Components/HelpCenter/HelpCenter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelpCenter/>
  </StrictMode>,
)
