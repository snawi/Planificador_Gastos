import { useState, useEffect } from 'react'
import { Mensaje } from "./Mensaje"
import cerrarBtn from '../img/cerrar.svg'

export const Modal = ({setModal, animarModal, setAnimarModal,  guardarGasto, gastoEditar, setGastoEditar}) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')

    const [cantidad, setCantidad] = useState('')

    const [categoria, setCategoria] = useState('')
    
    const[id, setId] = useState('')

    const [fecha, setFecha] = useState('')


    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0 ){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])


    const ocultarModal = () => {
        
        setAnimarModal(false)
        setGastoEditar({})

        setTimeout(() => {
            setModal(false)
        }, 500);
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})

    }







  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
             src={cerrarBtn}
             alt="cerrar" 
             onClick={ocultarModal}
             />
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>{ gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto' }</legend>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className='campo'>
                <label htmlFor="nombre">Nombre gasto</label>
                <input
                 type="text"
                 placeholder='Añade el nombre del gasto' 
                 value={nombre}
                 onChange={e => setNombre(e.target.value)}
                  />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">cantidad</label>
                <input
                 type="number"
                 placeholder='Añade la Cantidad :ej. 300'
                 value={cantidad}
                 onChange={e => setCantidad( Number(e.target.value) )}
                   />
            </div>

            <div className='campo'>
            <label htmlFor="categoria">Categoria</label>
            <select 
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            >
                <option value=">--Seleccione-->"></option>
                <option value="Ahorro">Ahorro</option>
                <option value="Comida">Comida</option>
                <option value="Gatos">Gatos</option>
                <option value="casa">Casa</option>
                <option value="Ocio">Ocio</option>
                <option value="salud">salud</option>
                <option value="suscripciones">suscripciones</option>
            </select>
            </div>

            <input 
            type="submit"
            value={ gastoEditar.nombre ? 'Guardar cambios' : 'Añadir gasto' } />
        </form>
    </div>
  )
}
