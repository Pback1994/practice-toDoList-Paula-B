export default function ToDoList() {
  const tasks = ["Learn React", "Build a Project", "Read Documentation"];
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
