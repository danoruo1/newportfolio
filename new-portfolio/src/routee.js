import { useNavigate } from "react-router-dom";

const NavExp = () => {
  const navigate = useNavigate();

  return (
    <a
      href="/experiences"
      className="navbartext"
      onClick={(e) => {
        e.preventDefault(); // Prevent full page reload
        navigate("/experiences"); // Navigate using React Router
      }}
    >
      Experiences
    </a>
  );
};

export default NavExp