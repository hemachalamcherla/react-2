import PostTitle from "./PostTitle";
import PostBody from "./PostBody";

function Post({ title, body }) {
  return (
    <>
      <PostTitle title ={title} />
      <PostBody body={body} />
    </>
  );
}

export default Post;