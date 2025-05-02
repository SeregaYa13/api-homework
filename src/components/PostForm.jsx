import axios from "axios";
import React, { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1, // фиктивный пользователь
        }
      );
      setResponse(res.data);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Ошибка при отправке поста:", error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Добавить пост:</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 text-black rounded"
          required
        />
        <textarea
          placeholder="Текст поста"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="p-2 text-black rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Отправить
        </button>
      </form>

      {response && (
        <div className="mt-4 p-2 border rounded border-green-500">
          <h3 className="font-bold">Пост успешно отправлен!</h3>
          <p>
            <strong>ID:</strong> {response.id}
          </p>
          <p>
            <strong>Заголовок:</strong> {response.title}
          </p>
          <p>
            <strong>Текст:</strong> {response.body}
          </p>
        </div>
      )}
    </div>
  );
}

export default PostForm;
