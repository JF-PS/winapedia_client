import React from "react";

const RightBar = ({ children }) => {
  return (
    <aside
      className="
          font-text font-medium
          mb-5
          lg:col-start-2 lg:row-start-1 lg:row-span-3
          xl:col-start-3
        "
    >
      {children}
    </aside>
  );
};

export default RightBar;
