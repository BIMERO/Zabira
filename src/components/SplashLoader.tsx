import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashLoader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signup");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <img src="/loading.png" alt="loading" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SplashLoader;
