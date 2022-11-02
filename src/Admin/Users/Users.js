import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div style={{ marginTop: "6rem" }}>
      {allUsers.map((p) => (
        <div key={p._id} style={{ marginTop: "2rem" }}>
          {user?.result.isAdmin && <div>{p._id}</div>}
          <div>{p.name}</div>
          <div>{p.email}</div>
          <div>{p.isAdmin}</div>
          <div>{p.createdAt}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
