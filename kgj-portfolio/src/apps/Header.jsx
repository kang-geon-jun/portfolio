import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-200 to-pink-200 p-4 shadow-md z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">건준's Portfolio</h1>

        <div className="space-x-4">
          <Link
            to="/portfolio/about"
            className="text-white text-lg hover:text-gray-200"
          >
            About Me
          </Link>
          <Link
            to="/portfolio/skills"
            className="text-white text-lg hover:text-gray-200"
          >
            Skill
          </Link>
          <Link
            to="/portfolio/projects"
            className="text-white text-lg hover:text-gray-200"
          >
            Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
