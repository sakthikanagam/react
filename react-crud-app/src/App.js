import React, { useState } from "react";
import usersData from "./data/users.json";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [userToEdit, setUserToEdit] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const editUser = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>React CRUD App</h1>
      <UserForm
        addUser={addUser}
        editUser={editUser}
        userToEdit={userToEdit}
        setUserToEdit={setUserToEdit}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        setUserToEdit={setUserToEdit}
      />
    </div>
  );
};

export default App;
