import React from 'react'
import {useNavigate} from 'react-router-dom'
const Barra_NavOpcionPOO = ({nombre, ruta1,ruta2,ruta3, ruta4, ruta5, ruta6}) => {
  const enrutador = useNavigate();
  const activarR1 =()=>{
   enrutador(ruta1);
  }
  const activarR2 =()=>{
    enrutador(ruta2);
  }
  const activarR3 =()=>{
    enrutador(ruta3);
  }
  const activarR4 =()=>{
    enrutador(ruta4);
  }
  const activarR5 =()=>{
    enrutador(ruta5);
  }
  const activarR6 =()=>{
    enrutador(ruta6);
  }
  
  return (
    <>
        <div className='absolute bg-[#151515] hidden group-hover:block p-10 rounded-xl '>
              <span className=" ">
                  
                 
                  
                  

                  <h1 className='text-[14px] text-[#DEDEDE] inria-serif-bold'>Sistema de venta de productos</h1>

                  <div className='flex flex-row pl-6 py-2 group'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5715 0.857117H9.42864C8.48188 0.857117 7.71436 1.62463 7.71436 2.5714V3.42855C7.71436 4.37531 8.48188 5.14283 9.42864 5.14283H14.5715C15.5183 5.14283 16.2858 4.37531 16.2858 3.42855V2.5714C16.2858 1.62463 15.5183 0.857117 14.5715 0.857117Z" stroke="#4AA543" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.7143 2.57141H19.2857C19.7403 2.57141 20.1765 2.75203 20.4979 3.07351C20.8193 3.39501 21 3.83103 21 4.2857V21.4286C21 21.8832 20.8193 22.3193 20.4979 22.6407C20.1765 22.9622 19.7403 23.1428 19.2857 23.1428H4.71429C4.25962 23.1428 3.82359 22.9622 3.5021 22.6407C3.18062 22.3193 3 21.8832 3 21.4286V4.2857C3 3.83103 3.18062 3.39501 3.5021 3.07351C3.82359 2.75203 4.25962 2.57141 4.71429 2.57141H7.28571" stroke="#4AA543" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.57153 15.4286L11.143 17.1428L16.2858 10.2857" stroke="#4AA543" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarR4}>Diagrama de clases</h1>
                  </div>

                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4287 2.57141H11.143C10.1962 2.57141 9.42871 3.33893 9.42871 4.2857V11.1428C9.42871 12.0896 10.1962 12.8571 11.143 12.8571H21.4287C22.3755 12.8571 23.143 12.0896 23.143 11.1428V4.2857C23.143 3.33893 22.3755 2.57141 21.4287 2.57141Z" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8571 17.1429H6.85711C6.40245 17.1429 5.96642 16.9623 5.64492 16.6408C5.32344 16.3193 5.14282 15.8833 5.14282 15.4286V6.85718" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.4286 21.4285H2.57146C2.1168 21.4285 1.68077 21.2478 1.35928 20.9264C1.03779 20.605 0.857178 20.1688 0.857178 19.7142V10.2856" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarR5}>Casos de uso</h1>
                  </div>
                  <div className='flex flex-row pl-6 py-2 group'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4287 2.57141H11.143C10.1962 2.57141 9.42871 3.33893 9.42871 4.2857V11.1428C9.42871 12.0896 10.1962 12.8571 11.143 12.8571H21.4287C22.3755 12.8571 23.143 12.0896 23.143 11.1428V4.2857C23.143 3.33893 22.3755 2.57141 21.4287 2.57141Z" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8571 17.1429H6.85711C6.40245 17.1429 5.96642 16.9623 5.64492 16.6408C5.32344 16.3193 5.14282 15.8833 5.14282 15.4286V6.85718" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.4286 21.4285H2.57146C2.1168 21.4285 1.68077 21.2478 1.35928 20.9264C1.03779 20.605 0.857178 20.1688 0.857178 19.7142V10.2856" stroke="#EDFF80" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h1 className='text-[16px] text-[#ffffff] inria-serif-bold px-2 hover:text-[#4871AF] cursor-pointer' onClick={activarR6}>Modelo expandido</h1>
                  </div>
                 
                  
                  
              </span>
        </div>
    </>
  )
}

export default Barra_NavOpcionPOO
