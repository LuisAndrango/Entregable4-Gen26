import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalForm = ({ isShowModal, createUser, isUserToUpdate, updateUser, resetModalForm}) => {


    const { register, handleSubmit, reset } = useForm();

    const sudmit = (data) => {
        if (!data.birthday) data.birthday = null;
        if(isUserToUpdate){
            updateUser(data, reset)
        }else{

        }
        createUser(data, reset);
        updateUser
    }


    const handleCloseModal = () => {
        resetModalForm(reset)
    };

    useEffect(() => {
      if(isUserToUpdate){
        reset(isUserToUpdate)
      }
    }, [isUserToUpdate])
    
    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center 
    ${isShowModal ? " opacity-100 visible" : "invisible opacity-0"} transition-opacity`}>

            <form onSubmit={handleSubmit(sudmit)} className='bg-white w-[280px] p-4 grid gap-6 relative'>

                <h3 className='font-bold text-3xl'>{isUserToUpdate ? "Editar usuario" : "Nuevo usuario"}</h3>
                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor=''>Nombre</label>
                    <input placeholder='Ingresa tu nombre aquí' className='bg-gray-100 outline-none p-2'
                        type='text'
                        {...register("first_name")} />
                </div>

                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor=''>Apellido</label>
                    <input placeholder='Ingresa tu apellido aquí' className='bg-gray-100 outline-none p-2'
                        type='text'
                        {...register("last_name")} />
                </div>

                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor=''>Correo</label>
                    <input placeholder='Ingresa tu correo aquí' className='bg-gray-100 outline-none p-2'
                        type='email'
                        {...register("email")} />
                </div>

                <div className='grid gap-2'>
                    <label className='font-bold text-sm' htmlFor=''>Contraseña</label>
                    <input placeholder='Ingresa tu contraseña aquí' className='bg-gray-100 outline-none p-2'
                        type='password'
                        {...register("password")} />
                </div>

                <div className='grid gap-2'>
                    <label className='font-bold text-sm ' htmlFor=''>Cumpleaños</label>
                    <input placeholder='Ingresa tu cumpleaños aquí' className='bg-gray-100 outline-none p-2'
                        type='date'
                        {...register("birthday")} />
                </div>

                <button 
                onClick={handleCloseModal}
                 type='button' 
                className='absolute top-2 right-2 text-2xl  hover:text-secundary'>
                    
                    <i className='bx bxs-x-square'></i>
                </button>
                
                <button className='bg-sky-900 p-2 text-white rounded hover:bg-secundary'>{isUserToUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}
                </button>
            </form>
        </section>
    )
}

export default ModalForm