/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../../styles/PersonalInfoSection.css";

function PersonalInfoSection({ email, fullName, phoneNumber, address,linkedin,github }) {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{fullName}</h1>
      <div className="contact-info">
        {email && (
          <div>
            <i className="fa-solid fa-envelope" />
            <span>{email}</span>
          </div>
        )}

        {phoneNumber && (
          <div>
            <i className="fa-solid fa-phone" />
            <span>{phoneNumber}</span>
          </div>
        )}

        {address && (
          <div>
            <i className="fa-solid fa-location-dot" />
            <span>{address}</span>
          </div>
        )}
        {linkedin && (
          <div>
            <i className="fa-brands fa-linkedin" />
            <span>{linkedin}</span>
          </div>
        )}
        {github && (
          <div>
            <i className="fa-brands fa-github" />
            <span>{github}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfoSection;
