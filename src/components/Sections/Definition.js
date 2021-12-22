import React from "react";

const Definition = ({ definition }) => {
  return (
    <tr className="flex justify-between">
      <td className="font-semibold">{definition.field}</td>
      <td>{definition.value}</td>
    </tr>
  );
};

export default Definition;
