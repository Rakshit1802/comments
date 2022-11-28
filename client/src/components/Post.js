import { usePost } from "../contexts/PostContext";

export function Post({ children }) {
  const { post } = usePost();
  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className="comments-title">Comments</h3>
      <section>{post.comments}</section>
    </>
  );
}
