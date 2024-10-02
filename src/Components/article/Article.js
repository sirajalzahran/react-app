function Article({ personName, email, content = "no content" }) {
  return (
    <div
      style={{
        background: "white",
        boxShadow: "0px 10px 10px gray",
        color: "black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h1>{personName}</h1>
      <h2>{email}</h2>
      <h3>2024</h3>
      <hr />
      <p style={{ textAlign: "justify" }}>{content}</p>
    </div>
  );
}

function ArticleList() {
  const firstArticle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, qu sunt in
  culpa qui officia deserunt mollit anim id est laborum.`;

  const secondArticle = `is nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident,`;

  const articles = [
    { personName: "Siraj", email: "Siraj@gmail.com", content: firstArticle },
    { personName: "Moustafa", email: "ssfdfd@gmail.com", content: secondArticle },
    { personName: "Ali", email: "sffgfsg@gmail.com" },
    { personName: "Khaled", email: "Ssgsddiraj@gmail.com" },
    { personName: "Kamal", email: "ds@gmail.com" },
    { personName: "Samir", email: "Ssddssdiraj@gmail.com" },
  ];

  return (
    <>
      {articles.map((article, index) => (
        <Article
          key={index}
          personName={article.personName}
          email={article.email}
          content={article.content}
        />
      ))}
    </>
  );
}

export default ArticleList;
