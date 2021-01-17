import React from "react";

const Bar = ({ icon, name, level }) => {
  const bar_width = `${level}%`;
  return (
    <div className="bar">
      <div className="bar__wrapper" style={{ width: bar_width }}>
        <span className="bar__name">
          <span className="mr-2"> {icon}</span>
          {name}
        </span>
      </div>
    </div>
  );
};

export default Bar;
