import React from "react";
import { useSelector } from "react-redux";
import { Subscribe } from "../../Components";

const Users = () => {
  const { allUser } = useSelector((state) => state.allUsers);

  return (
    <div>
      <div style={{ marginTop: "6rem" }}>
        {allUser.map((p) => (
          <div key={p._id} style={{ marginTop: "2rem" }}>
            <div>{p.firstName}</div>
            <div>{p.lastName}</div>
            <div>{p.email}</div>
            <div>{p.createdAt}</div>
          </div>
        ))}
      </div>
      <Subscribe />
    </div>
  );
};

export default Users;
