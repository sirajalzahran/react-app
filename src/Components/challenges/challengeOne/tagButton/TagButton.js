import "./TagButtonStyle.css";

function TagButton({ name, children }) {
  // if (name == null || name === "") {
  //   return null;
  // }

  return (
    <>
      {name ? (
        <button className="tagButton">
          {name}
          {children}
        </button>
      ) : null}
    </>
  );

  // return (
  //   <>
  //     {name == null || name === "" ? (
  //       <div></div>
  //     ) : (
  //       <button className={"tagButton"}>
  //         {name}
  //         {children}
  //       </button>
  //     )}
  //   </>
  // );
}

export default TagButton;
