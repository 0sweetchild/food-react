
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = "https://jsonplaceholder.typicode.com/users/";

  function fetchUsers() {
    try {
      setLoading(true);

      fetch(URL)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">User List</h1>

      {loading ? (
        <h1 className="text-5xl text-red-500">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {users.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <div className="item p-5 border cursor-pointer hover:shadow-xl hover:bg-yellow-50 rounded-xl">
                <pre>{user.username}</pre>

                <h2 className="font-bold text-xl">
                  {user.name}
                </h2>

                <h3 className="flex gap-2">
                  <Mail /> {user.email}
                </h3>

                <h3 className="flex gap-2">
                  <Phone /> {user.phone}
                </h3>

                <div className="company border-t mt-3 pt-3">
                  <h3>{user.company.name}</h3>
                  <p>{user.company.catchPhrase}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
