import { useEffect } from "react"



export const ControlPresupuesto = ({presupuesto, gastos}) => {





    //funcion
    const formatearPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }


  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>grafica aqui</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
            <span>presupuesto:  </span> { formatearPresupuesto(presupuesto) }
            </p>
            <p>
            <span>Disponible:  </span> { formatearPresupuesto(0) }
            </p>

            <p>
            <span>Gastado:  </span> { formatearPresupuesto(0) }
            </p>
        </div>
    </div>
  )
}


