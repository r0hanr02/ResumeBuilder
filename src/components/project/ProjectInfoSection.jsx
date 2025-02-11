/* eslint-disable react/prop-types */
import ProjectsInfo from "./ProjectInfo";
import DisplaySection from "../DisplaySection";

function ProjectsInfoSection({ projects }) {
  return (
    <div className="projects-info-section resume-section">
      <DisplaySection
        array={projects}
        InfoComponent={ProjectsInfo}
        title="Projects"
      />
    </div>
  );
}

export default ProjectsInfoSection;
