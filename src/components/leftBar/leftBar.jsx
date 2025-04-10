import "./leftBar.css";

const leftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <img alt="" src="/general/logo.png" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <img alt="" src="/general/home.svg" />
        </a>
        <a href="/" className="menuIcon">
          <img alt="" src="/general/create.svg" />
        </a>
        <a href="/" className="menuIcon">
          <img alt="" src="/general/updates.svg" />
        </a>
        <a href="/" className="menuIcon">
          <img alt="" src="/general/messages.svg" />
        </a>
      </div>
      <a href="/" className="menuIcon">
          <img alt="" src="/general/home.svg" />
        </a>
    </div>
  )
}

export default leftBar;
