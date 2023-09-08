import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./AddTask.css";
import PriorityLevel from "./PriorityLevel/PriorityLevel";
import SelectCalendar from "./Calendar/Calendar";
import ChooseUsers from "./ChooseUsers/ChooseUsers";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const AddTask = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState("");
  const users = useSelector(state => state.userData.userData)
  // console.log(selectedPriority);
  // console.log(selectedPriority, selectedUsers, selectedDate, value, title);
  // console.log(selectedDate);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      ["link"],
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = "In progress";
    const user = users?.email
    const assignTask = selectedUsers
    const dueDate = selectedDate
    const priority = selectedPriority
    const date = new Date().toLocaleDateString();

    const data = {
      title,
      value,
      dueDate,
      assignTask,
      priority,
      status,
      date,
      user
    };
    // console.log(data);
    fetch("http://localhost:3005/api/manageTasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Order submit successfully");
          e.target.reset();

          setSelectedDate(null);
          setSelectedUsers([]);
          setValue("");
          setSelectedPriority("");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-36 my-20">
        <div className="flex justify-end">
          <input
            type="submit"
            className=" bg-black text-white rounded-full px-3 py-2 text-sm cursor-pointer"
            value="Publish"
          />
        </div>
        <div className="flex flex-col mb-5">
          <div className="ml-4 inline-block mb-[-13px] z-20">
            <span className="font-semibold bg-white px-1">Write Title</span>
          </div>
          <input
            className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
            type="text"
            name="slug"
            placeholder="Write here"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col  mb-5">
          <div className="ml-4 inline-block mb-[-13px] z-20">
            <span className="font-semibold bg-white px-1">Task Details</span>
          </div>
          <div className="border-2  border-gray-200  rounded-md p-2 w-full">
            <ReactQuill
              placeholder="Write your details..."
              className="w-full text-base"
              modules={modules}
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="">
            <PriorityLevel
              selectedPriority={selectedPriority}
              setSelectedPriority={setSelectedPriority}
            />
          </div>
          <div>
            <ChooseUsers
              selectedUsers={selectedUsers}
              setSelectedUsers={setSelectedUsers}
            />
          </div>
          <SelectCalendar setSelectedDate={setSelectedDate} />
        </div>
      </div>
    </form>
  );
};

export default AddTask;
