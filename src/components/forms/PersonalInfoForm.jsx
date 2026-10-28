import { useCVContext } from "../../context/CVContext";
import LinkedinIcon from "../LinkedinIcon";
import { useRef } from "react";
import { Camera, Upload, Trash2 } from "lucide-react";

function PersonalInfoForm() {
  const { cvData, handleChange, errors, handlePhotoUpload, removePhoto } =
    useCVContext();
  const fileInputRef = useRef(null);

  return (
    <div>
      <h2>Personal Info</h2>

      {/* Area Upload Foto Profil */}
      <div className="photo-upload-container">
        <div className="photo-avatar-preview">
          {cvData.photo ? (
            <img
              src={cvData.photo}
              alt="Profile Preview"
              className="photo-preview-img"
            />
          ) : (
            <div className="photo-placeholder">
              <Camera size={28} />
            </div>
          )}
        </div>

        <div className="photo-actions">
          {/* Input file disembunyikan dan dipicu oleh tombol */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            accept="image/*"
            style={{ display: "none" }}
          />

          <div className="photo-btn-group">
            <button
              type="button"
              className="photo-btn upload"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={14} />
              <span>{cvData.photo ? "Ganti Foto" : "Unggah Foto"}</span>
            </button>

            {cvData.photo && (
              <button
                type="button"
                className="photo-btn remove"
                onClick={removePhoto}
                title="Hapus Foto"
              >
                <Trash2 size={14} />
                <span>Hapus</span>
              </button>
            )}
          </div>

          <p className="photo-hint">Format JPG, PNG, atau WebP (Maks. 2MB)</p>
        </div>
      </div>

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
