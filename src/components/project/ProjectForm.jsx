/* eslint-disable react/prop-types */
import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

function ProjectsForm(props) {
  const { title, description, id } = props.form;
  const { onChange, cancel, save, remove } = props;

  return (
    <form
      className="project-form section-form"
      id={id}
      data-array-name="projects"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        type="text"
        id="project-name"
        labelText="Project Name"
        placeholder="Project Name"
        value={title}
        onChange={onChange}
        data-key="title"
      />
      <InputGroup
        type="text"
        id="project-description"
        labelText="Description"
        placeholder="Brief Description"
        value={description}
        onChange={onChange}
        data-key="description"
      />
      <Buttons save={save} cancel={cancel} remove={remove} />
    </form>
  );
}

export default ProjectsForm;
