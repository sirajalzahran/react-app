function Post({ postTitle = "No Title", postBody = "No Body" }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        margin: "25px",
        textAlign: "center",
      }}
    >
      <h2>{postTitle}</h2>
      <hr />
      <p>{postBody}</p>
    </div>
  );
}

export default Post;
