/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

function SkillsForm(props) {
  const { name, level, id } = props.form;

  const { onChange, cancel, save, remove } = props;

  return (
    <form
      className="skill-form section-form"
      id={id}
      data-array-name="skills"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        type="text"
        id="skill-name"
        labelText="Skill Name"
        placeholder="Skill Name"
        value={name}
        onChange={onChange}
        data-key="name"
      />
      {/* <InputGroup
        type="text"
        id="skill-level"
        labelText="Level"
        placeholder="Skill-Level"
        value={level}
        onChange={onChange}
        data-key="level"
      /> */}
      <Buttons save={save} cancel={cancel} remove={remove} />
    </form>
  );
}

export default SkillsForm;
