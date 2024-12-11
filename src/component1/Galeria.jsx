import React from 'react'
import Barra_navegacionV2Galeria from '../component/Barra_navegacionV2Galeria'
const Galeria = () => {
  return (
        <div>
            <Barra_navegacionV2Galeria ruta={'Video'}/>
            <div className='flex items-center place-content-center h-screen w-full bg-[#0A192E]'>
            <iframe width="1000" height="700" src="https://www.youtube.com/embed/vIKcEM05jYY?si=p4Pz41jY4oFw4qUr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            
            
            </div>

        </div>
  )
}

export default Galeria
