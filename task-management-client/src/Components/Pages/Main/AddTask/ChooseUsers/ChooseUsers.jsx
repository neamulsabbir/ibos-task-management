import { useState } from "react";
import useUser from "../../../../CustomHook/useUser";

const ChooseUsers = ({selectedUsers,setSelectedUsers}) => {
  const [allUsers] = useUser();

  const [isContentVisible, setContentVisible] = useState(false);

  const handleToggle = () => {
    setContentVisible(!isContentVisible);
  };

  const toggleUserSelection = (userEmail) => {
    // Check if the user is already selected
    if (selectedUsers.includes(userEmail)) {
      // If selected, remove from the selectedUsers array
      setSelectedUsers(selectedUsers.filter((email) => email !== userEmail));
    } else {
      // If not selected, add to the selectedUsers array
      setSelectedUsers([...selectedUsers, userEmail]);
    }
  };

  return (
    <div>
      <div className="">
        <input type="checkbox" id="collapse-toggle" className="hidden " />
        <label
          htmlFor="collapse-toggle"
          className="block  text-base font-medium cursor-pointer border-2 border-gray-200 rounded-lg px-4 py-1"
          onClick={handleToggle}
        >
          Share task for other members
        </label>
        <div
          className={`bg-slate-50 px-4 py-3 w-full ${
            isContentVisible ? "block" : "hidden"
          } custom-content`}
        >
          {allUsers.map((data, i) => (
            <div key={i} className="flex items-start mt-2">
              <input
                className="bg-black mt-2"
                type="checkbox"
                onChange={() => toggleUserSelection(data?.email)}
                checked={selectedUsers.includes(data?.email)}
              />
              <label htmlFor={`category-${i}`} className="ml-1 flex flex-col">
                <h1 className="font-medium">{data?.name}</h1>
                <h1 className="text-sm">{data?.email}</h1>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUsers;
