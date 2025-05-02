import axios from "axios";
import React, { useState } from "react";

function DeletePost() {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
      setMessage("Пост успешно удалён!");
    } catch (err) {
      console.error(err);
      setMessage("Ошибка при удалении поста");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Удаление поста</h2>
      <button
        onClick={handleDelete}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
      >
        Удалить пост
      </button>

      {message && <p className="mt-2 text-yellow-400">{message}</p>}
    </div>
  );
}

export default DeletePost;
