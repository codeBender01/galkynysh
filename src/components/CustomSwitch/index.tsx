import type { FC } from "react";
import { useState } from "react";

const CustomSwitch: FC = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="mb-6">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-12 h-6 rounded-full transition-colors duration-300 ${
            checked ? " bg-[#13A538]" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 mt-1 ${
              checked ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </div>
      </label>
    </div>
  );
};

export default CustomSwitch;
