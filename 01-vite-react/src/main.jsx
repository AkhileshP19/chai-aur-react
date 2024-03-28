import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const anotherElement = (
//   <a href='https://www.google.com' target='_blank'>Visit Google</a>
// )

// const reactElement = React.createElement( // takes 3 parameters i.e tag name, object, direct text
//   'a',
//   {href: 'https://www.google.com', target:'_blank'},
//   'Click me to visit Google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
