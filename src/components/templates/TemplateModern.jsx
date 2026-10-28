import { useCVContext } from "../../context/CVContext";
import { useMemo } from "react";
import { Mail, Phone } from "lucide-react";
import LinkedinIcon from "../LinkedinIcon";

function TemplateModern({}) {
  const { cvData } = useCVContext();

  const skillsList = useMemo(() => {
    return cvData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
  }, [cvData.skills]);

  return (
    <div className="cv-modern">
      {/* Dark Header */}
      <div className="modern-header">
        <h1>{cvData.name}</h1>
        <p className="modern-title">
          {cvData.experiences[0]?.jobTitle || "Your Job Title"}
        </p>
        <div className="modern-contacts">
          {cvData.email && (
            <span className="modern-contact-item">
              <Mail size={13} /> {cvData.email}
            </span>
          )}
          {cvData.phone && (
            <span className="modern-contact-item">
              <Phone size={13} /> {cvData.phone}
            </span>
          )}
          {cvData.linkedin && (
            <span className="modern-contact-item">
              <LinkedinIcon size={13} /> {cvData.linkedin}
            </span>
          )}
        </div>
      </div>

      {cvData.summary && (
        <div className="modern-section">
          <h2>About Me</h2>
          <p>{cvData.summary}</p>
        </div>
      )}

      {cvData.experiences.some((exp) => exp.company) && (
        <div className="modern-section">
          <h2>Work Experience</h2>
          {cvData.experiences.map(
            (exp, i) =>
              exp.company && (
                <div
                  key={i}
                  className="modern-entry"
                  style={{ marginBottom: "12px" }}
                >
                  <div className="modern-entry-left">
                    <p className="modern-role">{exp.jobTitle}</p>
                    <p className="modern-sub">{exp.company}</p>
                  </div>
                  <span className="modern-year">{exp.workYear}</span>
                </div>
              ),
          )}
        </div>
      )}

      {cvData.educations.some((edu) => edu.school) && (
        <div className="modern-section">
          <h2>Education</h2>
          {cvData.educations.map(
            (edu, i) =>
              edu.school && (
                <div
                  key={i}
                  className="modern-entry"
                  style={{ marginBottom: "12px" }}
                >
                  <div className="modern-entry-left">
                    <p className="modern-role">{edu.degree}</p>
                    <p className="modern-sub">{edu.school}</p>
                  </div>
                  <span className="modern-year">{edu.eduYear}</span>
                </div>
              ),
          )}
        </div>
      )}

      {cvData.skills && (
        <div className="modern-section">
          <h2>Skills</h2>
          <div className="modern-skills">
            {skillsList.map((skill, i) => (
              <span key={i} className="modern-skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TemplateModern;
