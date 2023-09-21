function buscarId(datos, id_pagoreserva, callback) {
    const elementoEncontrado = datos.find(elemento => elemento.id_pagoreserva === id_pagoreserva);
    callback(elementoEncontrado);
}
  

  function mostrarElementosPagoReserva(elemento) {
    if (elemento) {
      console.log("----------------------");
      console.log("Elementos encontrados:");
      console.log("----------------------");
      console.log("Id de Pago Reserva:", elemento.id_pagoreserva);
      console.log("Nombre del titular de la tarjeta", elemento.nombre_tarjeta);
      console.log("Número de tarjetea",elemento.numtarjeta);
      console.log("Direccion",elemento.direccion);
      console.log("Nombre de la Ciudad",elemento.ciudad);
      console.log("----------------------");
    } else {
      console.log("Ningun elemento encontrado!!!!!!!");
    }
  }
  
  
  module.exports = {
    buscarId,
    mostrarElementosPagoReserva
  };