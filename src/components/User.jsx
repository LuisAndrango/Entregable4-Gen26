const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {

    const handleClickDelete = () => {
        deleteUser(user.id)
    }

    const handleClickUpdate = () => {
        changeShowModal()
        setIsUserToUpdate(user)
    }

    return (
        <article className="grid gap-2 p-2 justify-items-center ">
            <div>
            <div className="bg-white p-2 rounded-t-lg">
                <h4 className="p-2 font-bold text-1xl text-center">{user.first_name} {user.last_name}</h4>
                <div>
                    <h5 className="text-gray-500">Correo:</h5>
                    <span className="font-bold">{user.email}</span>
                </div>
                <div>
                    <h5 className="text-gray-500">Cumpleaños:</h5>
                    <span className="font-bold"><i className='bx bx-gift' >
                    </i>{user.birthday || " No fecha"}</span>
                </div>
            </div>
            <div className="flex space-x-2 justify-end max-h-15 bg-sky-900 p-2 rounded-b-lg">
                <button className=" grid btn-secundary bx p-1 rounded-md" onClick={handleClickDelete}><i className='bx 
            bxs-trash'></i></button>
                <button className="grid btn-secundary bx p-1 rounded-md " onClick={handleClickUpdate}><i className='bx 
            bx-pencil' ></i></button>
            </div>
            </div>
        </article>
    )
}

export default User