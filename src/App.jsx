import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { ListadoGastos } from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import './index.css'
import { object } from 'prop-types'

function App() {

  const [presupuesto, setPresupuesto] = useState(
      Number(localStorage.getItem('presupuesto'))  ?? 0
    )

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)

  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const [gastoEditar, setGastoEditar] = useState({})

 
  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ){
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
  
    }
  },[gastoEditar])

  //local storage
  useEffect(() => {
   localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if(presupuestoLS > 0 ) {
      setIsValidPresupuesto(true)
    }
  })


//funcion
  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);

  }


  const guardarGasto = gasto => {
    if(gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})

    }else{
      gasto.fecha = Date.now()
      gasto.id = generarId()
      setGastos([...gastos, gasto])
    }
    
    
    

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);

  }


  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }




  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
      gastos = {gastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      />

    {isValidPresupuesto && (
      <>
        <main>
          <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={ eliminarGasto}
          />
        </main>

       <div className='nuevo-gasto'>
       <img
        src={IconoNuevoGasto}
        alt="IconoNuevoGasto"
        onClick={handleNuevoGasto}
        />
     </div>
     </>
    )}
      {modal && <Modal
                 setModal={setModal}
                 animarModal={animarModal}
                 setAnimarModal={setAnimarModal}
                 guardarGasto={ guardarGasto}
                 gastoEditar={gastoEditar}
                 setGastoEditar={setGastoEditar}
                  /> }

    </div>
  )
}

export default App
