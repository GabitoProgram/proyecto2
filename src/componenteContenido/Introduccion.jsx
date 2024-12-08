import React from 'react'
import Barra_navegacionV2_1 from '../component/Barra_navegacionV2_1'
const Introduccion = () => {
  return (
    <div>
      <Barra_navegacionV2_1 ruta={'Inicio'}/>
      <div className='w-full bg-[#0A192E] flex place-content-center h-screen items-center'>
        <div className='  componenteContenido_controller_Intro_Ante'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>1. Introducción</h1>
            <hr className=' border-gray-50'/>



            <h1 className='text-white text-[32px] p-2 inria-serif-bold'>¿Cuál es nuestro proyecto?</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
            El proyecto consiste en crear un sistema de venta de productos de un  supermercado, hoy en día los supermercados necesitan agilidad al saber que les falta en su almacen y lo que se vende,  no perder datos de sus clientes.
            </h1>



            <h1 className='text-white text-[32px] p-2 inria-serif-bold'>Objetivos del proyecto </h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
            El sistema en el que trabajaremos se centra en la venta de productos, asegurando una experiencia satisfactoria para los clientes y resolviendo problemas internos que proponemos solucionar.

            </h1>

        </div>
      </div>
    </div>
    
  )
}

export default Introduccion
