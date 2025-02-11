/* eslint-disable react/prop-types */
import DisplayForms from "../DisplayForms";
import ExpandSection from "../ExpandSection";
import CreateForm from "../CreateForm";
import "../../styles/Section.css";
import ProjectsForm from "./ProjectForm";

function AddProjectsSection({
  projects,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) {
  return (
    <div className="add-projects-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Projects"
        iconName="fa fa-folder-open"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={projects}
          FormComponent={ProjectsForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="name"
          arrayName="projects"
        />

        <CreateForm onClick={createForm} buttonText="Add Project" />
      </div>
    </div>
  );
}

export default AddProjectsSection;
