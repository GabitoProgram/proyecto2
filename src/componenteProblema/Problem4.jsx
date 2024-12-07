import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2_2';
const Problem4 = () => {
  return (
    <div>
      <Barra_navegacionV2 ruta={'Problemas'}/>
      <div className='w-full bg-[#0A192E] flex pt-28 pb-12 place-content-center'>
        <div className='  w-[60%]'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>4. Propósito del estudio</h1>
            <hr className=' border-gray-50 py-5'/>



            <h1 className="text-[32px] text-[#31D0C7] pl-3 inria-serif-bold">4.1. Optimización de la gestión del inventario</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-6 bg-[#172945] mb-14 inria-serif-regular'>
            Garantizar que el sistema registre de manera precisa las existencias de productos, identificando rápidamente faltantes o excedentes.<br/><br/>
            Esto permitirá mantener un control eficiente del inventario y asegurar la disponibilidad constante de productos para los clientes.
            <br/><br/>
              
            </h1>



            <h1 className="text-[32px] text-[#31D0C7] pl-3 inria-serif-bold">4.2. Monitoreo y actualización del inventario en tiempo real</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-6 bg-[#172945] mb-14 inria-serif-regular'>
            Asegurar que el sistema registre de forma inmediata las salidas de productos, proporcionando datos actualizados sobre el inventario disponible.<br/><br/>
            Esto facilitará la identificación de productos faltantes y permitirá tomar decisiones informadas para la reposición de mercancías.
            <br/><br/>

            </h1>


            <h1 className="text-[32px] text-[#31D0C7] pl-3 inria-serif-bold">4.3. Conservación de la información de clientes y transacciones
            </h1>
            <h1 className='text-[#B1BACC] text-[20px] p-6 bg-[#172945] mb-14 inria-serif-regular'>
            Proveer un sistema que almacene y gestione de manera segura los datos de los clientes y las transacciones realizadas.<br/><br/>
            Esto evitará la pérdida de información valiosa, promoviendo la fidelización de los clientes y asegurando una operación ordenada.
            <br/><br/>
            </h1>
        </div>




      </div>
    </div>
    
    
  )
}

export default Problem4
