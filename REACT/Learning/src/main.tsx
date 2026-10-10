import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Card, ExtButton, ModButton, LineButton} from './Components.tsx'

createRoot(document.getElementById('root')!).render(

    // if you want to have multiple JSX element you have to use fragments
    <>
      <Card />
      <Card />
      <ExtButton />
      <ModButton />
      <LineButton />
    </>
)
