import { useState } from "react";
import Card from "./UI/Card";

const NewList = ({ onAdd, onError, errorPart }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
    onError(false)
  };
  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
    onError(false)
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();
    
    if (userAge.trim().length === 0 && userName.trim().length > 0) {
      onError(true)
      errorPart("User age is empty, please insert user age and try to submit again!")
      return;
    }
    else if (userAge.trim().length > 0 && userName.trim().length === 0){
      onError(true)
      errorPart("User name is empty, please insert user name and try to submit again!")
      return;
    }
    else if (userAge.trim().length === 0 && userName.trim().length === 0){
      onError(true)
      errorPart("User name and user age is empty, please insert user name and user age and try to submit again!")
      return;
    }

    onAdd(userName, userAge);

    setUserName("");
    setUserAge("");
  };
  return (
    <>
      <Card className={"mt-5 p-4"}>
        <form onSubmit={userSubmitHandler}>
          <div className="mb-5">
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Input Name
            </label>
            <input
              type="text"
              placeholder="masukkan nama..."
              id="userName"
              value={userName}
              onChange={userNameChangeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="userAge"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Input Age
            </label>
            <input
              type="number"
              placeholder="masukkan umur..."
              id="userAge"
              value={userAge}
              onChange={userAgeChangeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-[#AE445A] hover:bg-[#8E3C50] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewList;
