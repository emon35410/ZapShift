import React, { use } from 'react';
import { AuthContext } from '../Component/Contexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext)
    return authInfo
};

export default useAuth;