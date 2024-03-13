import './App.css'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Componentsample from './apuntes/basics/Componentsample'
import UseEffectComp from './apuntes/hooks/UseEffectComp'
import Contador4 from './apuntes/basics/Contador4'


function App() {

  return (
    <>
      <header>Hola este es mi header</header>
      <BrowserRouter>
    
      <div className='flex flex-col'>
        <Link to='/'>Home</Link>
        <Link to='/UseEffect'>UseEffect</Link>
        <Link to='/Contador/0'>Contador</Link>
      </div>


      <Routes>
        <Route path="/" element={<Componentsample texto="Hola"></Componentsample>}></Route>
        <Route path='/UseEffect' element={<UseEffectComp></UseEffectComp>}></Route>
        <Route path='/Contador/:n' element={<Contador4></Contador4>}></Route>     
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
