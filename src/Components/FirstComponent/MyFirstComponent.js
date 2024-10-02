import "./FirstComponentStyle.css";

function MyFirstComponent() {
  // const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];

  // const myTasksList = tasks.map()

  const person = {
    name: "Siraj",
    email: "sirajalzahran@gmail.com",
  };

  const elmStyle = {
    backgroundColor: "red",
    fontSize: "20px",
    boxShadow: "0px 2px 5px 10px black",
    cursor: "pointer",
  };
  return (
    <div>
      <h1 style={elmStyle}>{person.name}</h1>
      <h2 style={{ backgroundColor: "green" }}>
        Your email is: {person.email}
      </h2>
      <h3 className={"active"}>Habebe</h3>
      <h1 className={person.name === "Siraj" ? "redBg" : "greenBg"}>
        Check Name
      </h1>
      <button style={elmStyle} onClick={sayHello}>
        Click Me
      </button>

      <div>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
          <li>Task 4</li>
        </ul>
      </div>
    </div>
  );
}

function sayHello() {
  alert("Hello");
}

export default MyFirstComponent;
