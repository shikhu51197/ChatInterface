import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/1567679.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there👋 </h1>
          <p className="mb-5">
            Join the Conversation , meet new people , and make connections🤝 in
            one shared room .
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
