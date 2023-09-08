import { DatePicker } from "antd";
import moment from "moment";

const SelectCalendar = ({ setSelectedDate }) => {
  const handleDateChange = (date, dateString) => {
    const formattedDate = moment(dateString, "YYYY-MM-DD").format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
  };
  return (
    <div className="">
      <h1 className="text-base">Select Due Date</h1>
      <DatePicker
        className="border-2 border-black"
        placeholder="Select due date"
        format="YYYY-MM-DD"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default SelectCalendar;
