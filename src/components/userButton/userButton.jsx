import "./userButton.css";

const userButton = () => {
    
    const currentUser=false;

  return currentUser? (
    <div className="userButton ">
        <img src="/general/noAvatar.png" alt="" />
        <img src="/general/arrow.svg" alt="" />
    </div>
  ) : (
    <a href="/" className="loginLink">
        Login / Signup
    </a>
  )
}

export default userButton;
