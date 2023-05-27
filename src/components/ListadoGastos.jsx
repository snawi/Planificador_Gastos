import { Gastu } from "./Gastu"

export const ListadoGastos = ({gastos}) => {
  
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'gastos' : 'no hay gastos aun'}</h2>

        {gastos.map( gasto => (
            <Gastu
            key={gasto.id}
            gasto={gasto}
            
            />
        ))}

    </div>
  )
}
