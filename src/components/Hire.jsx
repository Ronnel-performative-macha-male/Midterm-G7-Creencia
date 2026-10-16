import { useState } from "react";
const RepoCard = ({rate}) => {
     const [hour, setHour] = useState(0);
   function handleAddHour() {
    setHour(hour + 1 * rate);
  }
  function handleResetForHire() {
    setHour(0);
  }
    return(
        
        <div className="flex gap-4">
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{hour}</p>
            </div>
       <button
            className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
            onClick={handleAddHour}
          >
            Add hour
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
            onClick={handleResetForHire}
          >
            Clear
          </button>
          </div>
       );
};

export default RepoCard;