import Link from "next/link";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

const PostList = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h2>post list</h2>
      <ul>
        {posts.slice(0, 5).map((post) => {
          return (
            <li key={post.id} className="border-b-2 pb-4">
              <article>
                <h2 className="font-bold">{post.title}</h2>
                <p>{post.body}</p>
                <p className="text-blue-600">
                  <Link href={`/posts/${post.id}`}>View Details</Link>
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
