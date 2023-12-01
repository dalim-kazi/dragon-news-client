import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Title/Title';

const ProfileDetails = () => {
    const { user } = useContext(AuthContext)
    useTitle('profile')
    return (
        <div className='bg-white w-75  h-auto text-center p-5 rounded-4 ms-5 mb-5'>
            <img className='h-50 w-50 mb-5 rounded-4' src={user?.photoURL} alt="" />
            <p> {user?.displayName}</p>
            <p>{user?.email}</p>
        </div>
    );
};

export default ProfileDetails;