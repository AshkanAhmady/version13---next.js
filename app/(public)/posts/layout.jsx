import PostList from "./PostList";
import ClientComponent from "./[postId]/ClientComponent";

const PostLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 bg-slate-300 px-4 py-2 h-[calc(100vh-3rem)] max-h-screen overflow-y-auto">
        <PostList />
      </div>
      <div className="col-span-3 p-8">{children}</div>
      <ClientComponent />
    </div>
  );
};

export default PostLayout;
