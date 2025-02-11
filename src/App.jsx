import { useState, useRef } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/personal-info/PersonalDetails";
import AddEducationSection from "./components/education/AddEducationSection";
import AddExperienceSection from "./components/experience/AddExperienceSection";
import Resume from "./components/Resume";
import uniqid from "uniqid";
import TemplateLoader from "./components/TemplateLoader";
import exampleData from "./example-data";
import Sidebar from "./components/Sidebar";
import Customize from "./components/Customize";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import AddSkillsSection from "./components/skills/AddSkillsSection";
import AddProjectsSection from "./components/project/AddProjectSection";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState("content");
  const [resumeLayout, setResumeLayout] = useState("top");
  const [prevState, setPrevState] = useState(null);
  const resumeRef = useRef(null);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  function createForm(arrayName, object) {
    setPrevState(null);
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }

  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

  const createExperienceForm = () =>
    createForm("experiences", {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });
  const createSkillsForm = () =>
    createForm("skills", {
      name: "",
      level: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });
  const createProjectsForm = () =>
    createForm("projects", {
      name: "",
      description: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

  const setOpen = (sectionName) => setSectionOpen(sectionName);

  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }

  function cancelForm(e) {
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          form = prevState;
          form.isCollapsed = true;
        }
        return form;
      }),
    });
  }

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState({ ...form });
          form[key] = !form[key];
        }
        return form;
      }),
    });
  }
// const handleDownloadPDF = async () => {
//   const element = resumeRef.current;
//   if (!element) return;

//   setOpen(true); 
//   console.log("Capturing content for PDF...");
  
//   const canvas = await html2canvas(element, { scale: 2 });
//   console.log("Canvas generated:", canvas);
//   document.body.appendChild(canvas);

//   const imgData = canvas.toDataURL("image/png");

//   const pdf = new jsPDF("p", "mm", "a4");
//   const imgWidth = 210;
//   const imgHeight = (canvas.height * imgWidth) / canvas.width;

//   pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
//   pdf.save("resume.pdf");

//   console.log("PDF download triggered.");
// };
const handleDownloadPDF = async () => {
  const element = resumeRef.current; // Assuming this is the container for the entire resume
  if (!element) return;

  console.log("Capturing content for PDF...");

  // Capture the content of the resume as a canvas image
  const canvas = await html2canvas(element, { scale: 2 });
  console.log("Canvas generated:", canvas);

  // Convert the canvas to an image
  const imgData = canvas.toDataURL("image/png");

  // Create a PDF with jsPDF and add the image of the captured resume
  const pdf = new jsPDF("p", "mm", "a4");
  const imgWidth = 210; // A4 width in mm
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // Add the image to the PDF
  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  // Save the PDF with the given file name
  pdf.save("resume.pdf");

  console.log("PDF download triggered.");
};



  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");
  const toggleHidden = (e) => toggleValue(e, "isHidden");

  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar onGoToPage={setCurrentPage} page={currentPage} />
        <div className="form-container">
          <TemplateLoader
            onTemplateLoad={() => {
              setPersonalInfo(exampleData.personalInfo);
              setSections(exampleData.sections);
            }}
            onClear={() => {
              setPersonalInfo({
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
              });
              setSections({
                educations: [],
                experiences: [],
                skills: [],
                projects: [],
              });
              setPrevState(null);
            }}
          />
          {currentPage === "content" && (
            <>
              <PersonalDetails
                onChange={handlePersonalInfoChange}
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                phoneNumber={personalInfo.phoneNumber}
                address={personalInfo.address}
              />
              <AddEducationSection
                educations={sections.educations}
                isOpen={sectionOpen === "Education"}
                onChange={handleSectionChange}
                createForm={createEducationForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
              <AddExperienceSection
                experiences={sections.experiences}
                isOpen={sectionOpen === "Experience"}
                onChange={handleSectionChange}
                createForm={createExperienceForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
              <AddSkillsSection
                skills={sections.skills}
                isOpen={sectionOpen === "Skills"}
                onChange={handleSectionChange}
                createForm={createSkillsForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
                
              />
              <AddProjectsSection
                projects={sections.projects}
                isOpen={sectionOpen === "Projects"}
                onChange={handleSectionChange}
                createForm={createProjectsForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />

              <button className="downloadBtn" onClick={handleDownloadPDF}>
                Download PDF
              </button>
            </>
          )}

          <Customize
            isShown={currentPage === "customize"}
            onColChange={setResumeLayout}
          />
        </div>
      </div>

      <div id="resume" ref={resumeRef}>
        <Resume
          personalInfo={personalInfo}
          sections={sections}
          layout={resumeLayout}
        />
      </div>
    </div>
  );
}

export default App;
