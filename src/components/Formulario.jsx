import useCotizador from '../hooks/useCotizador'
import { Marcas } from '../helpers/constantes';
import Error from './Error';


const year = new Date().getFullYear();

export const years = Array.from(new Array(10), (valor, index) => year - index);
// console.log(years);

const Formulario = () => {
  
  const { datos , handleChangeDatos , error , setError , cotizarSeguro} =  useCotizador()

  const handleSubmit =(e)=>{
    e.preventDefault();

    // Validaciones
    if(Object.values(datos).includes('')){
      setError('error , campos obligatorios')
      return
    }
    setError('')

    // Comienza Cotización
    cotizarSeguro()

  }

  return (
    <>
      { error && <Error>{error}</Error>}
      <form onSubmit={handleSubmit}
        className="w-4/5 max-w-xl mx-auto flex flex-col gap-3 bg-slate-800 py-8 px-6 rounded-md">
        <div className="flex flex-col gap-2">
          <label className="uppercase font-bold">marca</label>
          <select className="text-center text-black rounded-md p-1 capitalize"
            onChange={e =>handleChangeDatos(e)} 
            name='marca'     
            value={datos.marca}
          >
            <option value="">--- Seleccione ---</option>
            {Marcas?.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase font-bold">Year</label>
          <select className="text-center text-black rounded-md p-1"
            onChange={e =>handleChangeDatos(e)}
            name='year'  
            value={datos.year}
          >
            <option value="">--- Seleccione ---</option>
            {years?.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="uppercase font-bold">Seleccione el tipo</label>
          <div className="flex gap-3 ">
            <div className="flex items-center gap-2">
              <label htmlFor="tipo">basico</label>
              <input  onChange={e=>handleChangeDatos(e)}
                type="radio" name="tipo" value="basico" />
            </div>
            <div className="flex items-center gap-2">
              <label>completo</label>
              <input onChange={e=>handleChangeDatos(e)}
              type="radio" name="tipo" value="completo" />
            </div>
          </div>
        </div>
        <input
          className="w-11/12 p-1 uppercase font-bold mt-2 rounded-sm bg-slate-700 mx-auto cursor-pointer hover:bg-slate-600 hover:tracking-widest transition-all"
          type="submit"
          value="cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
