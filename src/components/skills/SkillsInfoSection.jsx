/* eslint-disable react/prop-types */
import SkillsInfo from "./SkillsInfo";
import DisplaySection from "../DisplaySection";
import "../../styles/SkillsInfoSection.css"
function SkillsInfoSection({ skills }) {

  return (
    <div className="skills-info-section resume-section">
      <DisplaySection
        array={skills}
        InfoComponent={SkillsInfo}
        title="Skills"
      />
    </div>
  );
}

export default SkillsInfoSection;
