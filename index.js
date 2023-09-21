

const { buscarId, mostrarElementosPagoReserva } = require('./src/scripts/elementos');


const datos = [
    {
        id_pagoreserva: 1,
        nombre_tarjeta: "Juan Pérez",
        numtarjeta: 1234567890123456,
        direccion: "Calle 220, Avenida 110",
        ciudad: "Manta"
      },
    
  ];
  
  
  buscarId(datos, 1, mostrarElementosPagoReserva);