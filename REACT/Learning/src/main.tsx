import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.tsx'

createRoot(document.getElementById('root')!).render(

    // if you want to have multiple JSX element you have to use fragments
    <>
      <Card />
      <Card />
    </>
)
