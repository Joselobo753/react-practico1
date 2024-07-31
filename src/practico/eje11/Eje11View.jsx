import { useEffect, useState } from "react";
import Eje11Card from "./Eje11Card";

const Eje11View = () => {
  const [todoList, setTodoList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const fetch_url = import.meta.env.VITE_eje1112_url
  const fetch_urlUsers = import.meta.env.VITE_eje11_url
  const fetchTodosList = async () => {
    try {
      const res = await fetch(fetch_url);
      const data = await res.json();
      setTodoList(data);
    } catch (error) {
      console.error("error");
    }
  };

  const fetchUsersList = async () => {
    try {
      const res = await fetch(fetch_urlUsers);
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    fetchTodosList();
    fetchUsersList();
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="userSelect" className="form-label">Seleccionar Usuario</label>
        <select id="userSelect" className="form-select" onChange={handleUserChange} value={selectedUser || ''}>
          <option value="">Todos los usuarios</option>
          {userList.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <Eje11Card todoList={todoList} selectedUser={selectedUser} />
    </div>
  );
};
export default Eje11View;