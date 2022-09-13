import React from "react";

function UserHomePage({ user }) {
  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  );
}

export default UserHomePage;
