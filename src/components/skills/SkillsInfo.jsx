/* eslint-disable react/prop-types */
import "../../styles/SkillsInfo.css";

function SkillsInfo({ info }) {
  return (
    <div className="skills-info">
        <p className="skills-info-name">{info.name}</p>
    </div>
  );
}

export default SkillsInfo;
