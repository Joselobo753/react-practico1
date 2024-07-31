

import { useEffect, useState } from "react";

import Eje12Card from "./Eje12Card";



const Eje12View = () => {
  const [todoList, setTodoList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const fetch_url = import.meta.env.VITE_eje1112_url
 
  const fetchTodosList = async () => {
    try {
      const res = await fetch(fetch_url);
      const data = await res.json();
      setTodoList(data);

     
      const users = [...new Set(data.map(todo => todo.userId))];
      setUserList(users);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    fetchTodosList();
  }, []);

  
  const filteredTodos = selectedUser
    ? todoList.filter(todo => todo.userId === selectedUser)
    : [];

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="userSelect" className="form-label">Selecciona un usuario</label>
        <select
          id="userSelect"
          className="form-select"
          value={selectedUser || ""}
          onChange={(e) => setSelectedUser(Number(e.target.value))}
        >
          <option value="" disabled>Seleccione un usuario</option>
          {userList.map(user => (
            <option key={user} value={user}>Usuario {user}</option>
          ))}
        </select>
      </div>
      <Eje12Card todoList={filteredTodos} />
    </div>
  );
};

export default Eje12View;