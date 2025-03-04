import { useSetRecoilState } from "recoil";
import { seasonState } from "../atoms/seasonAtom";
import { Link } from "react-router-dom";

const Header = () => {
  const setSeason = useSetRecoilState(seasonState);

  return (
    <div className="w-full bg-gradient-to-r from-indigo-200 to-pink-200 p-4 shadow-md z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/portfolio">
          <h1 className="text-white text-2xl font-bold">건준`s Portfolio</h1>
        </Link>
        <div className="flex gap-4">
          <button
            onClick={() => setSeason("spring")}
            className="px-3 py-1 bg-pink-300 rounded"
          >
            봄
          </button>
          <button
            onClick={() => setSeason("summer")}
            className="px-3 py-1 bg-blue-300 rounded"
          >
            여름
          </button>
          <button
            onClick={() => setSeason("autumn")}
            className="px-3 py-1 bg-orange-300 rounded"
          >
            가을
          </button>
          <button
            onClick={() => setSeason("winter")}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            겨울
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
