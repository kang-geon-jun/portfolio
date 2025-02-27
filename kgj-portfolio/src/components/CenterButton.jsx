import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import { useNavigate } from "react-router-dom";

const CenterButton = () => {
  const nav = useNavigate();

  return (
    <div>
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={6}
        radius={8}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => {
            nav("/portfolio/about");
          }}
          tooltip="About Me"
          tooltipPlacement={TooltipPlacement.Right}
          style={{
            backgroundColor: "#FFB6C1", // 연핑크
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            transition: "background-color 0.3s",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          About Me
        </CircleMenuItem>

        <CircleMenuItem
          onClick={() => {
            nav("/portfolio/skills");
          }}
          style={{
            backgroundColor: "#98FB98", // 연한 녹색
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            transition: "background-color 0.3s",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Skill
        </CircleMenuItem>

        <CircleMenuItem
          onClick={() => {
            nav("/portfolio/projects");
          }}
          style={{
            backgroundColor: "#FFD700", // 따뜻한 노란색
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            transition: "background-color 0.3s",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Project
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export default CenterButton;
