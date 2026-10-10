import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Card, ExtButton, ModButton, LineButton, Person} from './Components.tsx'

createRoot(document.getElementById('root')!).render(

    // if you want to have multiple JSX element you have to use fragments

    // name, age and status in Person will be used for the Prop
    <>
      <h2>Components</h2>
      <Card />
      <Card />
      <hr></hr>
      <h2>Styles</h2>
      <ExtButton />
      <ModButton />
      <LineButton />
      <hr></hr>
      <h2>Props</h2>
      <Person name="Bobby" age={13} status={true} />
      <Person name="Hank" age={34} status={false} />
    </>
)
