import Eje12Lista from "./Eje12lista";

const Eje12Card = ({ todoList }) => {
    const groupTodosByUser = (todos) => {
        return todos.reduce((acc, todo) => {
          if (!acc[todo.userId]) {
            acc[todo.userId] = [];
          }
          acc[todo.userId].push(todo);
          return acc;
        }, {});
      };
      
    const todosByUser = groupTodosByUser(todoList);
    return (
      <section className="row">
        {Object.entries(todosByUser).map(([userId, todos]) => (
          <div className="col-12 col-md-3 m-2" key={userId}>
            <ul className="list-group">
              <li
                className="list-group-item active"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${userId}`}
                aria-expanded="false"
                aria-controls={userId}
              >
                Usuario {userId}
              </li>
              <div className="collapse" id={userId}>
                {todos.map(todo => (
                  <Eje12Lista key={todo.id} todo={todo} />
                ))}
              </div>
            </ul>
          </div>
        ))}
      </section>
    );
  };
  
  export default Eje12Card;