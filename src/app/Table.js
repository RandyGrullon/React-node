import React from "react";

const Table = ({ Data }) => {
  const task = Data;

  return (
    <div className="col s7">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {task.map((task) => (
                <p key={task._id}>{task.title}</p>
              ))}
            </td>
            <td>
              {task.map((task) => (
                <p key={task._id}>{task.description}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
