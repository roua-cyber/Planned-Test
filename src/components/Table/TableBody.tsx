import React, { FC } from "react";
import { User, Users } from "../../types";
type TableBodyProps = {
  data: Users;
};
const TableBody: FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((user: User, index: number) => (
        <tr key={index}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{`${user.name.firstName} ${user.name.lastName}`}</td>
          <td>{user.age}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
