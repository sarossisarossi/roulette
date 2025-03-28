import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import Userdata from './components/Userdata.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [money, setMoney] = useState(0);

  useEffect(() => {
    // Solo preguntar si el estado aún no tiene un valor asignado
    if (!name && !money) {
      const userData = Userdata(); // Llamar a la función desde el módulo

      setName(userData.name); // Asignar el nombre
      setMoney(userData.money); // Asignar la cantidad de dinero
    }
  }, [name, money]); // El useEffect ahora depende del nombre y dinero

  return (
    <>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
