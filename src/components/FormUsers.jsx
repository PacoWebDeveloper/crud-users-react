import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({createUsers, dataToUpdate, updateUser}) => {
    const { handleSubmit, register, reset } = useForm()
    //Reset nos ayuda a poder montar los datos que le pasemos en el formulario

    const submitForm = (data) => {
        dataToUpdate ? updateUser(dataToUpdate.id, data) : createUsers(data)
        reset(defaultValues)
    }

    useEffect(() => {
        dataToUpdate&& reset(dataToUpdate)
    }, [dataToUpdate])

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <h2>User data</h2>
            <div className="input-container">
                <span className="material-symbols-outlined">
                    person
                </span>
                <input type="text" {...register("first_name")} placeholder="Name" className='input little'/>        
            
                <input type="text" {...register("last_name")} placeholder="Last name" className='input little'/>
            </div>

            <div className="input-container">
                <span className="material-symbols-outlined">
                    mail
                </span>
                <input type="email" {...register("email")} placeholder="email" className='input'/>
                {/* los register son parte de la funcionalidad del hoo-form y lo que va entre
                comillas, debe ser exactamente igual a como está definido en el backend */}
            </div>

            <div className="input-container">
                <span className="material-symbols-outlined">
                    password
                </span>
                <input type="password" {...register("password")} placeholder="Password" className='input'/>
            </div>
        
            <div className="input-container">
                <span className="material-symbols-outlined">
                    cake
                </span>
                <input type="date" {...register("birthday")} placeholder="Birthday" className='input'/>
            </div>

            <button>{dataToUpdate ? 'Update' : 'Add'} user</button>
        </form>
    )
}

export default FormUsers