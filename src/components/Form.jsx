import { useState, useEffect } from "react"
import Error from "./Error";

export default function Form({ pacientes, setPacientes, paciente, setPaciente }) {
    const [petName, setPetName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [release, setRelease] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=> {
        if( Object.keys(paciente).length > 0 ){
           setPetName(paciente.petName)
           setOwner(paciente.owner)
           setEmail(paciente.email)
           setRelease(paciente.release)
           setSymptoms(paciente.symptoms)
        }
    }, [paciente])

    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36)

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([petName, owner, email, release, symptoms].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true)
            return;
        }

        setError(false);

        const patientObject = {
            petName,
            owner,
            email,
            release,
            symptoms
        }

        if(paciente.id) {
            patientObject.id = paciente.id
            
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === 
                paciente.id ? patientObject : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            patientObject.id = generateId()
            setPacientes([...pacientes, patientObject])
        }

        setPetName('')
        setOwner('')
        setEmail('')
        setRelease('')
        setSymptoms('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
                {error && <Error>'Todos los campos son obligatorios'</Error>}
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="petName">Nombre Mascota</label>
                    <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 " type="text" placeholder="Nombre de la Mascota" id="petName" value={petName} onChange={(event) => setPetName(event.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="ownerName">Nombre Propietario</label>
                    <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 " type="text" placeholder="Nombre del Propietario" id="ownerName" value={owner} onChange={(event) => setOwner(event.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 " type="email" placeholder="Email Contacto Propietario" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="release">Alta</label>
                    <input className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 " type="date" placeholder="Email Contacto Propietario" id="release" value={release} onChange={(event) => setRelease(event.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Síntomas</label>
                    <textarea id="symptoms" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 " type="date" placeholder="Describe los Síntomas" value={symptoms} onChange={(event) => setSymptoms(event.target.value)}/>
                </div>

                <input type="submit" className="bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
            </form>
        </div>
    )
}