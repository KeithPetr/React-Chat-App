import GoogleSignIn from "../images/dark_google_sign_in.png";

export default function Welcome() {
  return (
    <>
      <h1>Welcome to React Chat App</h1>
      <button className="google-btn">
        <img src={GoogleSignIn} />
      </button>
    </>
  );
}
