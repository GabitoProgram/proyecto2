import React from 'react'
import ImgInv from '../../assets/SubSistemaInv.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_Inventario3 = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className=''>
            <div className='w-full h-screen bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    
                    
                    <h1 className='text-white text-[24px] p-2'>3. Lista de acontecimientos</h1>
                    <hr className=' border-gray-50'/>
                    
                    <ul className='bg-[#172945] p-5 m-5'>
                      <li className="text-[#B1BACC] text-[20px] ">- Realizar el reclamo de un producto dañado.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Generar informe de productos agotados.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Generar un reporte de ventas.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Generar un reporte de producto dados de alta.</li>
                      <li className="text-[#B1BACC] text-[20px] ">- Guardar de manera eficiente los datos del cliente</li>
                    </ul>

                </div>
            </div>
        </div> 
        
    </>
  )
}

export default MA_Inventario3
