import React from 'react'

const Header = ({changeShowModal}) => {

  const handleClickShowModal = () => {
    changeShowModal()
  }

  return (
    <section className='flex justify-between p-4 items-center'>

        <h1 className='font-bold text-3xl'>Usuarios</h1>

        <button onClick={handleClickShowModal} className='bg-sky-900 p-2 text-white rounded '>
        <i className='bx bx-plus-medical'> Crear nuevo usuario</i>
        </button>
    </section>
  )
}

export default Header