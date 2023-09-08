import useUser from "../../../CustomHook/useUser";

const shadow = {
    boxShadow:
      "rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px",
  };
const DashboardUsers = () => {
    const [allUsers] = useUser()
    console.log(allUsers);
    return (
        <div style={shadow} className="p-5 rounded-md h-full">
      <div className="grid grid-cols-12 font-bold">
        <h1 className="col-span-1">Sl.</h1>
        <h1 className="col-span-2">Date</h1>
        <h1 className="col-span-3">Name</h1>
        <h1 className="col-span-2">Email</h1>
      </div>
      {allUsers.map((user, i) => (
        <div key={i} className="grid grid-cols-12 mt-5">
          <h1 className="col-span-1">{i + 1}</h1>
          <h1 className="col-span-2">{user?.joiningDate}</h1>
          <h1 className="col-span-3">{user?.name}</h1>
          <h1 className="col-span-2">{user?.email}</h1>
        </div>
      ))}
    </div>
    );
};

export default DashboardUsers;