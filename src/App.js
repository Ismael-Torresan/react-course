import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <div>My Todos</div>
      <Todo text="React" />
      <Todo text="Learn Django" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
