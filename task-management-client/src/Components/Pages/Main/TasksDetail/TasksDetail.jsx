import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TasksDetail = () => {
    const {id} = useParams()
    const [taskDetails, setTaskDetails] = useState({})
    console.log(taskDetails);
    useEffect(() => {
        fetch(`http://localhost:3005/api/manageTasks/${id}`)
        .then(res => res.json())
        .then(data => setTaskDetails(data))
    },[id])
    return (
        <div className="p-36 my-10">
            <div className="flex">
              <p className="bg-black text-white inline-block px-3 py-1 rounded-xl text-sm">
                {taskDetails?.priority}
              </p>
              <p className="ml-2 bg-black text-white inline-block px-3 py-1 rounded-xl text-sm">
                {taskDetails?.status}
              </p>
              <p className="ml-2 bg-black text-white inline-block px-3 py-1 rounded-xl text-sm">{taskDetails?.dueDate}</p>
            </div>
            <div>
              <h1 className="text-3xl mt-5 mb-5 h-20">{taskDetails?.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: taskDetails?.value }} />
            </div>
        </div>
    );
};

export default TasksDetail;