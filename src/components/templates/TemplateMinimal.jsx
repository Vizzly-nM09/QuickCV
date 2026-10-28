import { useCVContext } from "../../context/CVContext";
import { useMemo } from "react";
import { Mail, Phone } from "lucide-react";
import LinkedinIcon from "../LinkedinIcon";

function TemplateMinimal({}) {
  const { cvData } = useCVContext();

  const skillsList = useMemo(() => {
    return cvData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
  }, [cvData.skills]);

  return (
    <div className="cv-minimal">
      <div className="minimal-container">
        <div className="minimal-sidebar">
          <div className="minimal-name">
            <h1>{cvData.name}</h1>
          </div>

          <div className="minimal-section">
            <h3>Contact</h3>
            {cvData.email && (
              <p className="minimal-contact-item">
                <Mail size={13} /> {cvData.email}
              </p>
            )}
            {cvData.phone && (
              <p className="minimal-contact-item">
                <Phone size={13} /> {cvData.phone}
              </p>
            )}
            {cvData.linkedin && (
              <p className="minimal-contact-item">
                <LinkedinIcon size={13} /> {cvData.linkedin}
              </p>
            )}
          </div>

          {cvData.skills && (
            <div className="minimal-section">
              <h3>Skills</h3>
              <div className="minimal-skill-list">
                {skillsList.map((skill, i) => (
                  <span key={i} className="minimal-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="minimal-main">
          {cvData.summary && (
            <div className="minimal-section">
              <h2>About Me</h2>
              <p>{cvData.summary}</p>
            </div>
          )}

          {cvData.experiences.some((exp) => exp.company) && (
            <div className="minimal-section">
              <h2>Experience</h2>
              {cvData.experiences.map(
                (exp, i) =>
                  exp.company && (
                    <div key={i} className="minimal-entry">
                      <div className="minimal-entry-header">
                        <h3>{exp.jobTitle}</h3>
                        <span className="minimal-date">{exp.workYear}</span>
                      </div>
                      <p className="minimal-company">{exp.company}</p>
                    </div>
                  ),
              )}
            </div>
          )}

          {cvData.educations.some((edu) => edu.school) && (
            <div className="minimal-section">
              <h2>Education</h2>
              {cvData.educations.map(
                (edu, i) =>
                  edu.school && (
                    <div key={i} className="minimal-entry">
                      <div className="minimal-entry-header">
                        <h3>{edu.degree}</h3>
                        <span className="minimal-date">{edu.eduYear}</span>
                      </div>
                      <p className="minimal-company">{edu.school}</p>
                    </div>
                  ),
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TemplateMinimal;
