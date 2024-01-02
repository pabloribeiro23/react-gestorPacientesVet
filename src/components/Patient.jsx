export default function Patient({ paciente, setPaciente, eliminarPaciente }) {

    const { petName, owner, email, release, symptoms, id} = paciente

    const handleEliminar = () => {
        Swal.fire({
            title: "¿Quieres eliminar este paciente?",
            showDenyButton: true,
            confirmButtonText: "Eliminar",
            denyButtonText: `Cancelar`,
            confirmButtonColor: "#464FE5",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("¡Eliminado con éxito!", "", "success");
              eliminarPaciente(id)
            } else if (result.isDenied) {
              Swal.fire("¡No se ha eliminado al paciente!", "", "warning");
            }
          });
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{petName}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
                <span className="font-normal normal-case">{release}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                 type="button" 
                 className="py-2 px-10 bg-indigo-600 
                 hover:bg-indigo-700 text-white font-bold 
                 uppercase rounded-lg"
                 onClick={() => setPaciente(paciente)}
                 >
                    Editar
                </button>
                <button 
                type="button" 
                className="py-2 px-10 bg-red-500 
                hover:bg-red-900 
                text-white font-bold 
                uppercase rounded-lg"
                onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}