import axios from "axios";
import React, { useState } from "react";

function CommentForm() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (!name.trim() || !body.trim()) {
      setError("Все поля обязательны!");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          name,
          body,
        }
      );

      console.log("Ответ от сервера:", response.data);
      setSuccess("Комментарий успешно отправлен!");
      setError("");
      setName("");
      setBody("");
    } catch (err) {
      console.error(err);
      setError("Ошибка при отправке комментария");
      setSuccess("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Оставить комментарий:</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <div>
          <textarea
            placeholder="Ваш комментарий"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
        >
          Отправить
        </button>

        {success && <p className="text-green-400">{success}</p>}
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </div>
  );
}

export default CommentForm;
