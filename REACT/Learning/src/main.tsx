import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Card, ExtButton, ModButton, LineButton, Person, DisplayLog, DisplayList, RemovePic, Hooks, OnChange, 
  Updater, UpdateObject, UpdateArray, objectArray} from './Components.tsx'

createRoot(document.getElementById('root')!).render(

    // if you want to have multiple JSX element you have to use fragments

    // name, age and status in Person will be used for the Prop

    // Last element is using defaultProp
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
      <Person /> 
      <hr></hr>
      <h2>Conditional Rendering</h2>
      <DisplayLog name="George" loggedIn={true} />
      <hr></hr>
      <h2>Rendering List</h2>
      <DisplayList />
      <hr></hr>
      <h2>Click Events</h2>
      <RemovePic />
      <hr></hr>
      <h2>Hooks</h2>
      <Hooks />
      <hr></hr>
      <h2>OnChange Event Handler</h2>
      <OnChange />
      <hr></hr>
      <h2>updater functions</h2>
      <Updater />
      <hr></hr>
      <h2>Update Objects</h2>
      <UpdateObject />
      <hr></hr>
      <h2>Update Array</h2>
      <UpdateArray />
      <hr></hr>
      <h2>Update Array of Objects</h2>
      <objectArray />
    </>
)
