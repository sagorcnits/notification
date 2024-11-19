import React, { useState } from "react";

const Admin = () => {
  return (
    <div className="h-screen">
      <App></App>
    </div>
  );
};

export default Admin;

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Mark Wilson", email: "mark@example.com" },
  ]);

  const sendNotification = (user) => {
    alert(`Notification sent to ${user.name}`);
  };

  const sendToAll = () => {
    alert("Notification sent to all users!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => sendNotification(user)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Notify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={sendToAll}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Notify All
      </button>
    </div>
  );
};
