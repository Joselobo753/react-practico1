import Eje11Lista from "./Eje11Lista";

const groupTodosByUser = (todos) => {
  return todos.reduce((acc, todo) => {
    if (!acc[todo.userId]) {
      acc[todo.userId] = [];
    }
    acc[todo.userId].push(todo);
    return acc;
  }, {});
};

const Eje11Card = (props) => {
  const { todoList, selectedUser } = props;

  const todosByUser = groupTodosByUser(todoList);
  const filteredTodosByUser = selectedUser
    ? { [selectedUser]: todosByUser[selectedUser] || [] }
    : todosByUser;

  return (
    <section className="row">
      {Object.entries(filteredTodosByUser).map(([userId, todos]) => (
        <div className="col-12 col-md-3 m-2" key={userId}>
          <ul className="list-group ">
            <li className="list-group-item active" type="button" data-bs-toggle="collapse" data-bs-target={"#" + userId} aria-expanded="false" aria-controls={userId}>
              Usuario {userId}
            </li>
            <div className="collapse" id={userId}>
              {todos.map((todo) => (
                <Eje11Lista key={todo.id} todo={todo} />
              ))}
            </div>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Eje11Card;