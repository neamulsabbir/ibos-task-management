import { useState } from "react";

const categories = [
  {
    category: "High",
  },
  {
    category: "Medium",
  },
  {
    category: "Low",
  },
];

const PriorityLevel = ({selectedPriority,setSelectedPriority}) => {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleToggle = () => {
    setContentVisible(!isContentVisible);
  };

  const handleCategoryChange = (event) => {
    setSelectedPriority(event.target.value); // Update the selected category when a radio button is clicked
  };

  return (
    <div className="">
      <input
        type="checkbox"
        id="collapse-toggle"
        className="hidden custom-toggle"
      />
      <label
        htmlFor="collapse-toggle"
        className="block text-base font-medium cursor-pointer border-2 border-gray-200 rounded-lg px-4 py-1"
        onClick={handleToggle}
      >
        Priority Level
      </label>
      <div
        className={`bg-slate-50 p-4 w-full ${
          isContentVisible ? "block" : "hidden"
        } custom-content`}
      >
        {categories.map((data, i) => (
           <div key={i} className="flex items-center">
          <input
            className="bg-black"
            type="radio"
            id={`category-${i}`}
            name="priorityCategory"
            value={data.category}
            checked={selectedPriority === data.category}
            onChange={handleCategoryChange}
          />
          <label htmlFor={`category-${i}`} className="ml-1">
            {data?.category}
          </label>
        </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityLevel;
