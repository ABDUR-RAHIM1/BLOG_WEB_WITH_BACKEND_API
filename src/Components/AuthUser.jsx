import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from './Spinner';
import "../StyleComponent/Responsive.css"

function AuthUser() {
    const [isLoading, setIsLoading] = useState(true);
    const [authUser, setAuthUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/auth')
            .then(res => res.json())
            .then(data => {
                setAuthUser(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <h2 className='text-center my-4 text-primary'>Users Profile</h2>
            <div className="AuthUserContainer container">

                <table className='table py-3 table-striped table-bordered'>
                    <thead className='bg-primary text-light'>
                        <th>Userame</th>
                        <th>Email</th>
                        <th>Joining Date</th>
                        {
                            authUser.map(user => {
                                return (
                                    <>
                                        <tr>
                                            <td className='py-3'>{user.username}</td>
                                            <td className='py-3'>{user.email}</td>
                                            <td className='py-3'>{`${new Date(user.date)}`}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </thead>
                </table>

            </div>
        </>
    )
}

export default AuthUser