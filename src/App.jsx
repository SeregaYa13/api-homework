import "./App.css";
import CommentForm from "./components/CommentForm";
import DeletePost from "./components/DeletePost";
import PostForm from "./components/PostForm";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Домашка: JSONPlaceholder API
      </h1>
      <TodoList />
      <hr className="my-4" />
      <PostForm />
      <hr className="my-4" />
      <UserList />
      <hr className="my-4" />
      <CommentForm />
      <hr className="my-4" />
      <DeletePost />
    </div>
  );
}

export default App;
