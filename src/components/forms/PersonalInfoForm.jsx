import { useCVContext } from "../../context/CVContext";
import LinkedinIcon from "../LinkedinIcon";

function PersonalInfoForm() {
  // Ambil langsung dari context — tidak perlu props!
  const { cvData, handleChange, errors } = useCVContext();

  return (
    <div>
      <h2>Personal Info</h2>

      <label>Full name</label>
      <input
        name="name"
        value={cvData.name}
        onChange={handleChange}
        placeholder="Your full name"
        className={errors.name ? "input-error" : ""}
      />
      {errors.name && <span className="error-msg">{errors.name}</span>}

      <label>Email</label>
      <input
        name="email"
        value={cvData.email}
        onChange={handleChange}
        placeholder="e.g. your@email.com"
        className={errors.email ? "input-error" : ""}
      />
      {errors.email && <span className="error-msg">{errors.email}</span>}

      <label>Phone</label>
      <input
        name="phone"
        type="tel"
        maxLength={13}
        value={cvData.phone}
        onChange={handleChange}
        placeholder="e.g. 08123456789"
        className={errors.phone ? "input-error" : ""}
      />
      {errors.phone && <span className="error-msg">{errors.phone}</span>}

      <label className="input-label-with-icon">
        <LinkedinIcon size={14} /> LinkedIn URL
      </label>

      <input
        name="linkedin"
        value={cvData.linkedin || ""}
        onChange={handleChange}
        placeholder="e.g. linkedin.com/in/yourname"
      />

      <label>Summary</label>
      <textarea
        name="summary"
        value={cvData.summary}
        onChange={handleChange}
        placeholder="Tell us about yourself..."
      />
    </div>
  );
}

export default PersonalInfoForm;
