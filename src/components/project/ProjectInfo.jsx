/* eslint-disable react/prop-types */
import "../../styles/ProjectsInfo.css";

function ProjectsInfo({ info }) {
  return (
    <div className="projects-info">
    {/* //   <div className="Projects-info-group">
    //     <p className="dates">
    //       {startDate}
    //       {startDate && endDate && <span> – </span>}
    //       {endDate}
    //     </p>
    //     <p>{location}</p>
    //   </div> */}
      <p className="projects-info-name">{info.title}</p>
      <p className="projects-info-description">{info.description}</p>
    </div>
  );
}

export default ProjectsInfo;
