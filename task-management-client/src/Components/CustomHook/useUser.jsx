import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../State/Thunk/getUserData";


const useUser = () => {
   const dispatch = useDispatch()

   const allUsers = useSelector(state => state.allUsers.allUsers)
//    console.log(allUsers);

   useEffect(() => {
    dispatch(getUserData())
   },[dispatch])

   return [allUsers]
};

export default useUser;