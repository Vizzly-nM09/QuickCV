import { useCVContext } from "../../context/CVContext";
import LinkedinIcon from "../LinkedinIcon";
import { Mail, Phone } from "lucide-react";

function TemplateATS({}) {
  const { cvData } = useCVContext();

  return (
    <div className="cv-ats">
      <div className="ats-header">
        <h1>{cvData.name}</h1>
        <p>
          {cvData.email} {cvData.phone && `| ${cvData.phone}`}{" "}
          {cvData.linkedin && `| ${cvData.linkedin}`}
        </p>
      </div>

      {cvData.summary && (
        <div className="ats-section">
          <h2>Summary</h2>
          <p>{cvData.summary}</p>
        </div>
      )}

      {cvData.experiences.some((exp) => exp.company) && (
        <div className="ats-section">
          <h2>Work Experience</h2>
          {cvData.experiences.map(
            (exp, i) =>
              exp.company && (
                <div key={i} className="ats-entry">
                  <h3>{exp.jobTitle}</h3>
                  <p>
                    {exp.company} | {exp.workYear}
                  </p>
                </div>
              ),
          )}
        </div>
      )}

      {cvData.educations.some((edu) => edu.school) && (
        <div className="ats-section">
          <h2>Education</h2>
          {cvData.educations.map(
            (edu, i) =>
              edu.school && (
                <div key={i} className="ats-entry">
                  <h3>{edu.degree}</h3>
                  <p>
                    {edu.school} | {edu.eduYear}
                  </p>
                </div>
              ),
          )}
        </div>
      )}

      {cvData.skills && (
        <div className="ats-section">
          <h2>Skills</h2>
          <p>{cvData.skills}</p>
        </div>
      )}
    </div>
  );
}

export default TemplateATS;
