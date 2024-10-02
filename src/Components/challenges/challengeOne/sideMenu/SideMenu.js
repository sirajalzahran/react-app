import TagButton from "../tagButton/TagButton";

function SideMenu() {
  return (
    <div
      style={{
        margin: "25px",
        border: "solid teal 5px",
      }}
    >
      <TagButton name="Btn One">
        <div>
          <span>😏😏😏</span>
        </div>
      </TagButton>
      <TagButton name="Btn Two">
        <div>
          <img
            alt="img"
            style={{ width: "60px" }}
            src="https://i.pinimg.com/736x/53/f3/41/53f3415e6611fa6ef0b23eeb0c75e332.jpg"
          />
        </div>
      </TagButton>
      <TagButton name="Btn Three">
        <div>
          <span>😏😏😏</span>
        </div>
      </TagButton>
      <TagButton></TagButton>
    </div>
  );
}

export default SideMenu;
