import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUser, editUser, deleteUser } from "./features/user";

function App() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <h1>Redux Toolkit CRUD</h1>

      <div className="addUser">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userData[userData.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userData.map((user) => {
          return (
            <div>
              <h2>{user.name}</h2>
              <h2>{user.username}</h2>
              <input
                type="text"
                placeholder="update Username"
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(editUser({ id: user.id, username: newUsername }))
                }
              >
                Update Username
              </button>

              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
