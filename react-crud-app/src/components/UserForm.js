import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, editUser, userToEdit, setUserToEdit }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      editUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: "", email: "" });
    setUserToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">{userToEdit ? "Update" : "Add"}</button>
    </form>
  );
};

export default UserForm;
