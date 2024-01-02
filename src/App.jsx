import Header from "./components/Header"
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import { useState, useEffect } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    }
  }, [])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    
    setPacientes(pacientesActualizados)
  }

  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes} 
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <PatientList 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;