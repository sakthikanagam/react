import React from "react";

const UserList = ({ users, deleteUser, setUserToEdit }) => {
  return (
    <div className="list">
      <h2>User List</h2>
      {users.length === 0 && <p>No users found.</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
            <div className="buttons">
              <button onClick={() => setUserToEdit(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
