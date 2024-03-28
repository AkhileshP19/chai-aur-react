import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-pink-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="Tina" btnText="Click me"/>
      <Card userName="Tilly" btnText="Visit me"/>
    </>
  )
}

export default App
