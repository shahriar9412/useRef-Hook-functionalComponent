import React, { useRef } from 'react'

const UserForm = () => {

    const userNameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ userName: userNameRef.current.value, password: passwordRef.current.value })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='UserName'>UserName:</label>
                <input
                    type='text'
                    id='UserName'
                    ref={userNameRef}
                />
            </div>
            <div>
                <label htmlFor='Password'>Password:</label>
                <input
                    type='Password'
                    id='Password'
                    ref={passwordRef}
                />
            </div>
            <button>Save</button>
        </form>
    )
}

export default UserForm
