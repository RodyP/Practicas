import{IPagoReserva}from "./interfaces/IPagoReserva";
import{Mdatos}from "./scripts/Mdatos";

const datos:IPagoReserva[]=
[
    {
        id_pagoreserva: 1,
        nombre_tarjeta: "Juan Pérez",
        numtarjeta: 1234567890123456,
        direccion: "Calle 220, Avenida 110",
        ciudad: "Manta"
      }
];

Mdatos(datos);