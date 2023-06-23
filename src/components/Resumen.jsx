import { useCallback, useRef } from "react";
import { Marcas } from "../helpers/constantes";
import useCotizador from "../hooks/useCotizador";

const Resumen = () => {
  const { resultado, datos } = useCotizador();
  const { marca, tipo, year } = datos;

  const [marcaNombre] = 
  useCallback(Marcas.filter(m=>m.id === Number(marca))
  ,[resultado])
  // console.log(marcaNombre)

  const tipoRef =  useRef(tipo)
  const yearRef =  useRef(year)


  if (resultado === 0) return null;

  return (
    <section className="w-4/5 max-w-xl mx-auto flex flex-col gap-3 bg-slate-800 py-8 px-6 rounded-md my-10">
      <h2 className="text-center text-3xl font-semibold">
        Resumen de Cotización
      </h2>
      <div className="flex flex-col gap-2 text-center justify-center">
        <p className="text-xl font-semibold">Costo Total: <span className="font-normal">{resultado}</span></p>
        <p className="text-xl font-semibold">Marca: <span className="font-normal">{marcaNombre.nombre}</span></p>
        <p className="text-xl font-semibold">Tipo de Seguro: <span className="font-normal">{tipoRef.current}</span></p>
        <p className="text-xl font-semibold">Año del Auto: <span className="font-normal">{yearRef.current}</span></p>
      </div>
    </section>
  );
};

export default Resumen;
