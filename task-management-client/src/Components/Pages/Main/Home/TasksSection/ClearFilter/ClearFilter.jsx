import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../../../../../State/actionCreator/actioncreator";

const ClearFilter = () => {
  const dispatch = useDispatch();
  const filterTask = useSelector((state) => state.tasks.filterTask);
  return (
    <div
      onClick={() => dispatch(clearFilter(filterTask))}
      className="flex justify-start items-center"
    >
      <div className="flex items-center text-xs cursor-pointer bg-black px-[6px] py-[6px] rounded-tl-md rounded-bl-md rounded-tr-full rounded-br-full text-white mb-4">
        <h1 className="mr-2 font-semibold">Clear Filter</h1>
        <div className="animate-pulse">
          <FontAwesomeIcon icon={faMultiply} />
        </div>
      </div>
    </div>
  );
};

export default ClearFilter;
