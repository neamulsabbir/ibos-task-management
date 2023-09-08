import { useDispatch, useSelector } from "react-redux"
import { getTasksData } from "../../State/Thunk/getTasksData"
import { useEffect } from "react"


const useTasks = () => {
    const dispatch = useDispatch()

   const tasks = useSelector(state => state.tasks.tasks)
//    console.log(allUsers);

   useEffect(() => {
    dispatch(getTasksData())
   },[dispatch])

   return [tasks]
}
export default useTasks;