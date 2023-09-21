import {IPagoReserva} from "../interfaces/IPagoReserva";

export function Mdatos(pagoreservas: IPagoReserva[])
{
    
    for (let i=0; i<3; i++){
        for (const indice in pagoreservas){
            const pagoreserva=pagoreservas[indice];
            console.log("{")
            console.log("-----ForIn n°", i)
            console.log("Id de Pago Reserva", pagoreserva.id_pagoreserva);
            console.log("Nombre del titular de la tarjeta", pagoreserva.nombre_tarjeta);
            console.log("Número de tarjetea", pagoreserva.numtarjeta);
            console.log("Direccion", pagoreserva.direccion);
            console.log("Nombre de la Ciudad", pagoreserva.ciudad);
            console.log("}")
        }
    }
}