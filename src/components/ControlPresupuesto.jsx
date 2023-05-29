import { useEffect, useState } from "react"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"



export const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(20)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(20)


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto ) => gasto.cantidad + total, 0)

        const totalDisponible = presupuesto - totalGastado

        //calcular el porcentaje gastado

        const nuevoPorcentaje= (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1500);
      

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
            <CircularProgressbar
            styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6'
            })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
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


