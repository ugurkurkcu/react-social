import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">PERONAMA</h3>
          <span className="loginDesc">
            Connect with the travellers all around the World on Peronama
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="User Name" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
