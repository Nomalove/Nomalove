import React from 'react'
import ReactDOM from 'react-dom/client'
import { NomaloveComponent } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NomaloveComponent title={'My App'} description={'My best app'}/>
  </React.StrictMode>,
)
