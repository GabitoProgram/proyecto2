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
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Gestiona Inventario</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Administrador (Primario), Cajero (Secundario)</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Propósito: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Registrar, actualizar y mantener la información del inventario de productos.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>El administrador o el cajero pueden agregar, eliminar o editar productos en el inventario. Este proceso asegura que los datos estén actualizados para reflejar correctamente la disponibilidad de los productos.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Tipo: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Primario y esencial</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tablas de inventario</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Precondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Acceso autorizado: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Solo usuarios autenticados como administradores o cajeros pueden gestionar el inventario.</span>
                          </li>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Conectividad: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El sistema debe estar conectado a la base de datos para registrar los cambios.</span>
                          </li>
                        </ul>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Postcondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Actualización del Inventario: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Los datos del inventario se actualizan correctamente.</span>
                          </li>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Notificación: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Se registra una notificación del cambio en el historial de inventario.</span>
                          </li>
                        </ul>
                      </span>
                    </div>


                    <div className='bg-[#17294557] p-5'>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Verifica los Pagos</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Cajero (Primario), Cliente (Secundario)</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Propósito: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Confirmar que los pagos realizados por los clientes sean válidos y procesados correctamente.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>El cajero recibe el pago del cliente, ya sea mediante QR, efectivo o tarjeta. El sistema verifica la validez del pago y lo registra.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Tipo: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Primario</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tablas de transacciones y métodos de pago</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Precondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Cliente activo: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El cliente debe estar realizando una transacción.</span>
                          </li>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Disponibilidad del método de pago: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El sistema debe estar configurado para aceptar el método de pago seleccionado.</span>
                          </li>
                        </ul>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Postcondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Registro del pago: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El sistema registra el pago y genera un recibo.</span>
                          </li>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Actualización de estado: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">La compra cambia a estado completado.</span>
                          </li>
                        </ul>
                      </span>
                    </div>


                    <div className='bg-[#17294557] p-5'>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Genera Informe de Ventas</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Administrador (Primario), Cajero (Secundario)</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Propósito: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Crear reportes detallados de las ventas realizadas en un periodo determinado.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>El administrador o el cajero solicita un informe de ventas, especificando un rango de fechas. El sistema genera un informe que incluye el total de ventas, productos vendidos y métodos de pago utilizados.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Tipo: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Secundario</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tablas de ventas y métodos de pago</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Precondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Datos disponibles: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">Debe haber registros de ventas en el rango especificado.</span>
                          </li>
                        </ul>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Postcondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Generación del Informe: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El sistema crea un informe descargable.</span>
                          </li>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Consulta registrada: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El sistema guarda un registro de la generación del informe.</span>
                          </li>
                        </ul>
                      </span>
                    </div>

                    <div className='bg-[#17294557] p-5'>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Nombre del Caso de uso: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Procesa Devoluciones</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Actores: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Cliente (Primario), Cajero (Secundario)</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Propósito: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Manejar devoluciones de productos y ajustar el inventario y las transacciones correspondientes.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Resumen: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>El cliente solicita la devolución de un producto. El cajero verifica la información de la compra y procesa la devolución, ajustando el inventario y ofreciendo un reembolso o un cambio.</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Tipo: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Primario</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Referencia cruzada: </h1>
                        <h1 className='text-[#B1BACC] text-[] text-2xl inria-serif-regular'>Tablas de transacciones, inventario y clientes</h1>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Precondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Compra registrada: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El producto debe estar asociado a una transacción registrada.</span>
                          </li>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Estado del producto: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El producto debe cumplir con las condiciones de devolución.</span>
                          </li>
                        </ul>
                      </span>
                      <span className='flex gap-2'>
                        <h1 className="text-[#9492D2] text-[] text-2xl inria-serif-bold">Postcondiciones: </h1>
                        <ul className='text-[#B1BACC] text-[] text-2xl inria-serif-regular pl-5'>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Actualización del Inventario: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El producto devuelto se reincorpora al inventario.</span>
                          </li>
                          <li>
                            <span className="text-[#6DAEC2] text-[] text-2xl inria-serif-bold">Reembolso: </span>
                            <span className="text-[#B1BACC] text-[] text-2xl inria-serif-regular">El cliente recibe el reembolso correspondiente.</span>
                          </li>
                        </ul>
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
