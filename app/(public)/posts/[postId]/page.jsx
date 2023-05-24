import { notFound } from "next/navigation";
import ClientComponent from "./ClientComponent";

// An alternative to (fallback value)
// true  => show that pages that dont define in (generateStaticParams)
// false => show (notFound) page when we want the page that not define in (generateStaticParams)
export const dynamicParams = true;

async function fetchPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    // if we want to use (SSR)
    // {cache: "no-store"}

    //if we want to use (SSG)
    // { cache: "force-cache" }

    // and if we want to use (ISR)
    // revalidate in 10 seconds
    { next: { revalidate: 10 } }
  );
  const post = await res.json();
  return post;
}

const PostDetail = async ({ params }) => {
  const post = await fetchPost(params.postId);
  // if post was not exists => show error
  // if (!post.id) throw new Error("post not found");

  // if post was not exists => show (notFound) page
  if (!post.id) return notFound();

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-2xl font-bold">Post detail - {params.postId}</h2>
      <h3 className="text-xl">{post.title}</h3>
      <p className="text-sm font-light">{post.body}</p>
      <ClientComponent />
    </div>
  );
};

export default PostDetail;

// this method is An alternative to (getStaticPaths) method
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // before nex-13 [ {postId: "1"}, {postId: "2"}, ... ]
  // the (PostDetail) component is re-render as many times as this loop is scrolled
  return posts.slice(0, 4).map((post) => ({
    // value most be string
    postId: post.id.toString(),
  }));
}

// dynamic metadata
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.postId);

  return {
    title: post.title,
  };
}
