import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
