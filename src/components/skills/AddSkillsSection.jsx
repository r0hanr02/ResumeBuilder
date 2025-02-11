/* eslint-disable react/prop-types */
import DisplayForms from "../DisplayForms";
import ExpandSection from "../ExpandSection";
import CreateForm from "../CreateForm";
import "../../styles/Section.css";
import SkillsForm from "./SkillsForm";

function AddSkillsSection({
  skills,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) 
{
  return (
    <div className="add-skills-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Skills"
        iconName="fa fa-cogs"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={skills}
          FormComponent={SkillsForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="name"
          arrayName="skills"
        />

        <CreateForm onClick={createForm} buttonText="Add Skill" />
      </div>
    </div>
  );
}

export default AddSkillsSection;
