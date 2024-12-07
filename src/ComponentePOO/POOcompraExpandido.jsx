import React from 'react'
import Img from '../assets/CUcompras.jpg'
import Barra_navegacionPOO from '../component/Barra_navegacionPOO'
const POOcomprasExpandido = () => {
  return (
    <div>
      <Barra_navegacionPOO ruta={'A&D_Orientado_a_objetos'}/>
      <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
              
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>Nivel Expandido</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5 flex flex-col gap-5'>
                      <div className='bg-[#17294557] p-5'>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'> Sistema de venta de productos</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'> Cliente, Administrador,cajero(Primario)</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">PROPÓSITO:: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Registrar  el inventario, clientes y  dar informe de todas las ventas y del inventario y de las devoluciones </h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'> Un cliente solicita un producto puede pagar de distintas manera(QR, tarjeta de débito, etc) y el encargado de registrar todos los datos y generar una factura es el cajero, el cajero es una persona que puede generar informe de ventas  y de inventario para estar siempre actualizados con el inventario el administrador es el que maneja todas las funcionalidades del sistema además el cliente puede devolver el producto 
                          .</h1>
                        </span><span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Tipo: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Primario y esencial</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tablas de clientes y inventario</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Precondiciones: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>los datos de los clientes y del inventario existen en el almacén de datos</h1>
                        </span>
                        <span className='flex gap-2'>
                          <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Postcpndiciones: </h1>
                          <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>la venta de cada producto queda registrada con su factura </h1>
                        </span>
                       
                                       
                      </div>



                        
                                       
                    </div>

                </div>
            </div>
        </div> 
    </div>
  )
}

export default POOcomprasExpandido