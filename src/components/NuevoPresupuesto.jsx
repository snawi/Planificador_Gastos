import { useState } from "react"
import { Mensaje } from "./Mensaje"


export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  //mensaje de error
  const [mensaje, setMensaje] = useState('')


  const handlePresupuesto = (e) => {
    e.preventDefault()
    if(!presupuesto || presupuesto < 0 ){
      setMensaje("no es un presupuesto valido")
      return
    }
    
    setMensaje('')
    setIsValidPresupuesto(true)
  }






  return (
    <div className="contenedor-presupuesto contenedor sombra">

        <form
        onSubmit={handlePresupuesto} 
        className="formulario">

            <div className="campo">
                <label htmlFor="">Definir presupuesto</label>
                <input
                className="nuevo-presupuesto" 
                type="number"
                placeholder="Añade tu presupuesto"
                value={presupuesto} 
                onChange={(e)=>setPresupuesto(Number(e.target.value))}/>
            </div>

            <input 
            type="submit"
            value="Agregar presupuesto"
            />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
             
        </form>


    </div>
  )
}
