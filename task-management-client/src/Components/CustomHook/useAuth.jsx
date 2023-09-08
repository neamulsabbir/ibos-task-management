import { useEffect, useState } from "react";


const useAuth = () => {
    const [userDatas, setUserDatas] = useState({})
    
    useEffect(() => {
        // Function to update user data in state
        const updateUserData = () => {
            const user = JSON.parse(localStorage.getItem('userData'));
            setUserDatas(user);
        };

        // Initial load
        updateUserData();

        // Listen for custom event 'userDataUpdated' and update data
        window.addEventListener('userDataUpdated', updateUserData);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('userDataUpdated', updateUserData);
        };
    }, []);

    return userDatas;
};

export default useAuth;