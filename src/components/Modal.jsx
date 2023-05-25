import cerrarBtn from '../img/cerrar.svg'

export const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
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

        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>nuevo gasto</legend>

            <div className='campo'>
                <label htmlFor="nombre">Nombre gasto</label>
                <input
                 type="text"
                 placeholder='Añade el nombre del gasto'  />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">cantidad</label>
                <input
                 type="number"
                 placeholder='Añade la Cantidad :ej. 300'  />
            </div>

            <div className='campo'>
            <label htmlFor="cantidad">Categoria</label>
            <select id="">
                <option value=">--Seleccione-->"></option>
                <option value="Ahorro">Ahorro</option>
                <option value="Comida">Comida</option>
                <option value="Gatos varios">Gatos varios</option>
                <option value="casa">Casa</option>
                <option value="Ocio">Ocio</option>
                <option value="salud">Suscripciones</option>
            </select>
            </div>

            <input 
            type="submit"
            value="Añadir gasto" />
        </form>
    </div>
  )
}
