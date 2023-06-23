import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";
import useCotizador from "./hooks/useCotizador";


function App() {
  const { cargando } =  useCotizador()
  return (
    <main className="container max-w-7xl w-11/12 mx-auto">
      <h1 className="text-center text-5xl my-10">Cotizador de Seguros</h1>
      <Formulario />
      {
        cargando ? <Spinner /> : <Resumen />
      }
    </main>
  );
}

export default App;
