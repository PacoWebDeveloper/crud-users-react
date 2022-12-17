import React from 'react'

const UserCard = ({user, deleteUser, setDataToUpdate}) => {
    
    return (
        <article className='user-card'>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <ul>
                <li><span><b>Email: </b></span> {user.email}</li>
                <li><span><b>Birthday: </b></span>{user.birthday}</li>
            </ul>
            <div className="options">
                <span className="material-symbols-outlined option-btn" onClick={() => deleteUser(user.id)}>
                    delete
                </span>
                <span className="material-symbols-outlined option-btn" onClick={() => setDataToUpdate(user)}>
                    edit
                </span>
            </div>
        </article>
    )
}

export default UserCard