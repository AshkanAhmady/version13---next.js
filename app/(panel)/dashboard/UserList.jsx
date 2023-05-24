async function fetchUsers() {
  // ایجاد یک دیلی برای گرفتن دیتا که بتونیم در زمان های مختلف دیتا رو بگیریم
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.slice(0, 3).map((user) => {
          return (
            <li key={user.id} className="border-b-2 pb-4">
              <article>
                <h2 className="font-bold">{user.name}</h2>
                <p>{user.username}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
