/* eslint-disable react/prop-types */
import "../styles/Resume.css";
import PersonalInfoSection from "./personal-info/PersonalInfoSection";
import EducationInfoSection from "./education/EducationInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";
import SkillsInfoSection from "./skills/SkillsInfoSection";
import ProjectsInfoSection from "./project/ProjectInfoSection";
import { useRef } from "react";

function Resume({ personalInfo, sections, layout }) {
  const resumeRef = useRef(null);
  return (
    <div className="resume-container">
      <div className={`resume ${layout}`} ref={resumeRef}> {/* Attach the ref here */}
        <PersonalInfoSection
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
          github={personalInfo.github}
          linkedin={personalInfo.linkedin}
        />
        <div>
          <EducationInfoSection educations={sections.educations} />
          <ExperienceInfoSection experiences={sections.experiences} />
          <SkillsInfoSection skills={sections.skills || []} />
          <ProjectsInfoSection projects={sections.projects} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
