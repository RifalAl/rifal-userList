import { useState } from "react";

import UserList from "./UserList";
import NewList from "./NewList";
import ErrorBlock from "./UI/ErrorBlock";

const UserListContent = () => {
  const [users, setUsers] = useState([
    {
      name: "Ahmad Rifaldi",
      age: "28",
      id: 1,
    },
    {
      name: "Fascal Ivandry",
      age: "28",
      id: 2,
    },
  ]);
  
  const [onError, setOnError] = useState(false);
  const[errorPart, setErrorPart] = useState("");

  const addUserHandler = (name, age) => {
    setUsers((prevItem) => [
      ...prevItem,
      { name: name, age: age, id: Math.random() * 10 },
    ]);
  };

  const removeUserHandler = (id) => {
    setUsers((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const errorHandler = () => {
    setOnError(false);
  };
  return (
    <div className="flex justify-center">
      <div className="w-[40%]">
        {onError && <ErrorBlock onClose={errorHandler} message={errorPart}/>}
        <NewList onAdd={addUserHandler} onError={setOnError} errorPart={setErrorPart}/>
        <UserList users={users} onRemove={removeUserHandler} />
      </div>
    </div>
  );
};

export default UserListContent;
