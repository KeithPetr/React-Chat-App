import GoogleAuth from "./GoogleAuth";
import EmailAuth from "./EmailAuth";


export default function Welcome() {

  return (
    <div className="welcome-content">
      <h1>Welcome to React Chat App</h1>
      <h3>Please sign in</h3>
      <GoogleAuth />
      <p className="manual-sign-up">
        or create an account
      </p>
      <EmailAuth />
    </div>
  );
}
