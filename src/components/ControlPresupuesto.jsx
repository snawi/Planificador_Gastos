import { useEffect, useState } from "react"



export const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)



    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto ) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGastado

        setDisponible(totalDisponible   )

        setGastado(totalGastado)

    },[gastos])


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
            <span>Disponible:  </span> { formatearPresupuesto(disponible) }
            </p>

            <p>
            <span>Gastado:  </span> { formatearPresupuesto(gastado) }
            </p>
        </div>
    </div>
  )
}


