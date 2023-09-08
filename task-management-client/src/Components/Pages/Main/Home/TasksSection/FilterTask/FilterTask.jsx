import { useDispatch } from "react-redux";
import { sendFilterData } from "../../../../../../State/actionCreator/actioncreator";

const status = [
  {
    name: "Completed",
  },
  {
    name: "In Progress",
  },
];
const priority = [
  {
    name: "High",
  },
  {
    name: "Medium",
  },
  {
    name: "Low",
  },
];
const FilterTask = () => {
  const dispatch = useDispatch();
  return (
    <div >
      <div>
        <h1>Status</h1>
        {status.map((data,i) => (
          <div key={i}
            onChange={() => dispatch(sendFilterData(data))}
            className="flex items-center mt-2"
          >
            <input type="radio" name="radio" id="" />
            <h1 className="ml-2">{data?.name}</h1>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h1>Priority Level</h1>
        {priority.map((data,i) => (
          <div key={i}
            onChange={() => dispatch(sendFilterData(data))}
            className="flex items-center mt-2"
          >
            <input type="radio" name="radio" id="" />
            <h1 className="ml-2">{data?.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterTask;
