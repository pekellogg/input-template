import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList(previousUsersList => {
      return [
        ...previousUsersList, { 
          id: Math.random().toString(),
          name: userName,
          age: userAge
        }
      ];
    });
  };

  return (
    <div className="content">
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );

};

export default App;