import Meals from "@/Components/Meals";
import React from "react";

// absolute work on ignore static title
export const metadata = {
  title: {
    absolute: "meals",
  },
  description: "meals",
};
const mealsPage = () => {
  return (
    <div className="mt-20">
      <h4 className="text-4xl text-green-300 ">
        Ali <span className="text-purple-500"> H</span>asan{" "}
        <span className="animate-pulse text-orange-600">
          parnto <h3 className="animate-spin">*</h3>
        </span>
      </h4>

      <Meals />
    </div>
  );
};

export default mealsPage;
