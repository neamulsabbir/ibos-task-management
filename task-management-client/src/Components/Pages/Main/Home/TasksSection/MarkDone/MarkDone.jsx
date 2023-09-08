import { useState } from "react";
import { toast } from "react-hot-toast";

const MarkDone = ({task}) => {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleToggle = () => {
    setContentVisible(!isContentVisible);
  };

  const handleClick = (data) => {
    
        fetch(`http://localhost:3005/api/assignTasks/${data?._id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Task completed done");
            });
    
  }

  return (
    <div>
      <div className="mt-2">
        <input type="checkbox" id="collapse-toggle" className="hidden " />
        <label
          htmlFor="collapse-toggle"
          className="inline-block  text-base font-medium cursor-pointer border-2 border-gray-200 rounded-lg px-2 py-1 "
          onClick={handleToggle}
        >
          <input type="checkbox" name="" id="" className="cursor-pointer"/>
        </label>
        <div
          className={`bg-slate-100 px-4 py-1 w-full ${
            isContentVisible ? "block" : "hidden"
          } custom-content`}
        >
          <h1 onClick={() => handleClick(task)} className="cursor-pointer">Completed</h1>
        </div>
      </div>
    </div>
  );
};

export default MarkDone;
