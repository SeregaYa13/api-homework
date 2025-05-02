import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Имитируем ошибку: можно заменить URL на неправильный
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setError(null);
      })
      .catch((err) => {
        setError("Ошибка при загрузке пользователей");
        console.error(err);
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Пользователи:</h2>

      {error && <p className="text-red-400">{error}</p>}

      <ul className="list-disc list-inside">
        {users.map((user) => (
          <li key={user.id}>
            <span className="font-semibold">{user.name}</span> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
