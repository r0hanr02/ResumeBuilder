/* eslint-disable react/prop-types */
import InputGroup from "../InputGroup";
import "../../styles/PersonalDetails.css";

function PersonalDetails({ onChange, email, fullName, phoneNumber, address,linkedin,github }) {
  return (
    <form className="personal-details">
      <h2>Personal Details</h2>
      <InputGroup
        type="text"
        id="full-name"
        labelText="Full name"
        placeholder="First and last name"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <InputGroup
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter email"
        value={email}
        onChange={onChange}
        data-key="email"
        recommended
      />
      <InputGroup
        type="tel"
        id="phone-number"
        labelText="Phone number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={onChange}
        data-key="phoneNumber"
        recommended
      />
      <InputGroup
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, Country"
        value={address}
        onChange={onChange}
        data-key="address"
        recommended
      />
      <InputGroup
        type="text"
        id="linkedin"
        labelText="Linkedin"
        placeholder="Linkedin"
        value={linkedin}
        onChange={onChange}
        data-key="linkedin"
        recommended
      />
      <InputGroup
        type="text"
        id="github"
        labelText="GitHub"
        placeholder="Github"
        value={github}
        onChange={onChange}
        data-key="github"
        recommended
      />
    </form>
  );
}
export default PersonalDetails;
