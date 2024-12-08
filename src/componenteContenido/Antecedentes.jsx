import React from 'react'
import img1 from '../assets/La semillita.png';
import img2 from '../assets/La tienda.png';
import Barra_navegacionV2_1 from '../component/Barra_navegacionV2_1'
const Antecedentes = () => {
  return (
    <div>
      <Barra_navegacionV2_1 ruta={'Inicio'}/>
      <div className='w-full bg-[#0A192E] flex pb-40 place-content-center pt-32'>
        <div className=' componenteContenido_controller_Intro_Ante'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>2. Antecedentes</h1>
            <hr className=' border-gray-50 py-5'/>



        
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
            En la esquina de la calle Boquero, frente a la histórica Plaza José Martí de La Paz, se alza "La Semillita", una tienda que durante décadas ha sido un pilar de la comunidad. Fundada por doña Rosa hace más de 40 años, la tienda comenzó como un humilde puesto donde Rosa vendía semillas y especias, inspirada en los recuerdos de su infancia en el altiplano. "Cada semilla es una promesa de vida", solía decir a los vecinos, quienes pronto convirtieron su negocio en parte esencial de sus rutinas.

            </h1>

            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
            Con el tiempo, "La Semillita" creció y comenzó a ofrecer más productos, desde alimentos básicos hasta pequeños artículos de hogar. Sin embargo, el crecimiento trajo consigo nuevos desafíos. Rosa llevaba el control del inventario y las ventas a mano, utilizando un cuaderno gastado que no siempre reflejaba las existencias reales.

            </h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
            Las facturas eran otro problema recurrente: a menudo, Rosa olvidaba registrar algunas transacciones, lo que ocasionaba confusiones al final del día. Además, el almacén de la tienda estaba siempre desordenado; no era raro que productos cercanos a caducar quedaran olvidados en el fondo de los estantes, lo que resultaba en pérdidas económicas.

            </h1>



            <div className='flex relative w-[100%] my-20'>
              <span className="w-[45%]">
                <img src={img1} className=''/>
              </span>
              <div className="absolute  w-[100%]">
                <div className='pl-[42%] '>
                  
                <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
            Con la llegada de supermercados modernos a la zona, estos problemas comenzaron a pesar más. Los clientes valoraban la calidez y el trato cercano de Rosa, pero también querían la eficiencia y organización de los negocios más grandes. Fue entonces cuando su nieto Javier, recién graduado de ingeniería de sistemas, decidió intervenir.

            </h1>
                </div>
              </div>
            </div>


            <div className='flex relative w-[100%] my-20'>
              <span className="w-[50%]">
              
              <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
            "Abuela", le dijo una tarde mientras reorganizaba unas bolsas de arroz, "no podemos dejar que estos problemas te quiten el sueño. Quiero implementar un sistema que te facilite el trabajo. Un sistema que controle el inventario, registre automáticamente las ventas, y te avise cuando un producto esté a punto de agotarse o caducar".

            </h1>
              </span>
              <div className="absolute  w-[100%]">
                <div className='pl-[55%] '>
                  <img src={img2} className='w-[100%]'/>
                </div>
              </div>
            </div>
            



        </div>
      </div>
    </div>
    
  )
}

export default Antecedentes

