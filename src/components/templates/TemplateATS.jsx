import { useCVContext } from "../../context/CVContext";

function TemplateATS({}) {
  const { cvData } = useCVContext();
  const contactLine = [cvData.email, cvData.phone, cvData.linkedin]
    .filter(Boolean)
    .join(" | ");

  const currentTitle = cvData.experiences?.[0]?.jobTitle?.trim();
  return (
    <div className="cv-ats">
      {/* 1. Centered Corporate Header */}
      <div className="ats-header">
        <h1>{cvData.name || "YOUR NAME"}</h1>
        {currentTitle && <p className="ats-subtitle">{currentTitle}</p>}
        {contactLine && <p className="ats-contacts">{contactLine}</p>}
      </div>
      {/* 2. Professional Summary */}
      {cvData.summary && (
        <div className="ats-section">
          <h2>Summary</h2>
          <p className="ats-summary-text">{cvData.summary}</p>
        </div>
      )}
      {/* 3. Work Experience */}
      {cvData.experiences?.some((exp) => exp.company?.trim()) && (
        <div className="ats-section">
          <h2>Work Experience</h2>
          {cvData.experiences.map(
            (exp, i) =>
              exp.company?.trim() && (
                <div key={i} className="ats-entry">
                  <div className="ats-entry-header">
                    <span className="ats-entry-title">
                      {exp.jobTitle || "Job Title"}
                    </span>
                    <span className="ats-entry-date">{exp.workYear}</span>
                  </div>
                  <p className="ats-entry-sub">{exp.company}</p>
                </div>
              ),
          )}
        </div>
      )}
      {/* 4. Education Background */}
      {cvData.educations?.some((edu) => edu.school?.trim()) && (
        <div className="ats-section">
          <h2>Education</h2>
          {cvData.educations.map(
            (edu, i) =>
              edu.school?.trim() && (
                <div key={i} className="ats-entry">
                  <div className="ats-entry-header">
                    <span className="ats-entry-title">
                      {edu.degree || "Degree"}
                    </span>
                    <span className="ats-entry-date">{edu.eduYear}</span>
                  </div>
                  <p className="ats-entry-sub">{edu.school}</p>
                </div>
              ),
          )}
        </div>
      )}
      {/* 5. Skills Keyword List */}
      {cvData.skills?.trim() && (
        <div className="ats-section">
          <h2>Skills</h2>
          <p className="ats-skills-list">{cvData.skills}</p>
        </div>
      )}
    </div>
  );
}
export default TemplateATS;
