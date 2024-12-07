import React from 'react'
import ImgInv from '../../assets/SubSistemaInv.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_Inventario = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className=''>
            <div className='w-full h-screen bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>1. Declaración de propósitos</h1>
                    <hr className=' border-gray-50'/>
                    <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 m-5'>
                    El sistema de ventas de productos del supermercado debe considerar la interacción del cajero, la persona encargada de atención al cliente y los propios clientes. El sistema permitirá registrar todos los productos disponibles en el almacén, así como la información de los clientes y sus facturas. Además, incluirá un mecanismo para generar informes sobre los productos que estén próximos a agotarse, y un reporte de ventas para identificar cuál ha sido el producto más vendido. El administrador será el responsable de dar de alta los productos, es decir, registrarlos en el sistema.     
                    </h1>  


                   
                
                    
                

                </div>
            </div>
        </div> 
        
    </>
  )
}

export default MA_Inventario
