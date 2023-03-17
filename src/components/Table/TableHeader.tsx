import React, { FC } from "react";
type TableHeaderProps = {
  headers: string[];
};
const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead>
      <tr>
        <th></th>
        {headers.map((header, index) => (
          <th key={index}>
            {header} <img src={"/sort-arrows.svg"} alt="logo" />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
