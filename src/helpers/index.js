export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

export const calcularMarca = (marca) => {
  let incremento;

  switch (marca) {
    case "1":
      incremento = 1.3;
      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento
};

export const calcularPlan =(plan)=>{
  return( plan === 'basico') ? 1.20 : 1.40
}

export const formatearPrecio = (precio)=>{
  return precio.toLocaleString('es-PE',{
    style:'currency',
    currency:'PEN'
  })
}
