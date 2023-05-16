import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const body = document.getElementsByTagName('body')[0]
console.log('body')
console.log(body)

const div = document.createElement('div')
body.appendChild(div)

ReactDOM.createRoot(div as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
