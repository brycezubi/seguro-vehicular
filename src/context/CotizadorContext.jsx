import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearPrecio, obtenerDiferenciaYear } from '../helpers'
export const CotizadorContext =  createContext();

export const CotizadorProvider = ({children})=>{

  const [ datos , setDatos] =  useState({
    marca:'',
    year:'',
    tipo:''
  })

  const [ error , setError] = useState('')

  const [ resultado , setResultado] = useState(0)
  const [ cargando , setCargando] = useState(false)

  const handleChangeDatos = e=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
  }

  const cotizarSeguro =()=>{
    console.log('cotizando...')

    // Base
    let resultado  = 1800

    // diferencia de Años
    // -3% x cada año
    const diferencia = obtenerDiferenciaYear(+datos.year)
    // console.log(diferencia)
    resultado -= ((diferencia * 3)* resultado)/100;
    console.log(resultado)


    // Europe 30%174
    // Americano 15%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca)
    console.log(resultado)

    // Plan Basico 20%
    // Plan Basico 40%
    resultado *= calcularPlan(datos.tipo)
    console.log(resultado)

    // resultado  = resultado.toFixed(2)
    resultado = formatearPrecio(resultado)
    console.log(resultado)


    setCargando(true)
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 2000);
  }
 
  return (
    <CotizadorContext.Provider
      value={{
        datos,
        error,
        setError,
        handleChangeDatos,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}