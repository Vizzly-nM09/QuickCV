import { memo } from "react";
import { useCVContext } from "../context/CVContext";

const ACCENT_COLORS = [
  { id: "navy", color: "#2c3e6b", label: "Navy" },
  { id: "crimson", color: "#e74c3c", label: "Crimson" },
  { id: "emerald", color: "#27ae60", label: "Emerald" },
  { id: "purple", color: "#8e44ad", label: "Purple" },
  { id: "amber", color: "#e67e22", label: "Amber" },
];

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  const { cvAccentColor, setCvAccentColor } = useCVContext();

  return (
    <div className="template-selector-wrapper">
      {/* Template Radio Buttons */}
      <div className="template-selector">
        <label className="selector-label">
          <input
            type="radio"
            name="template"
            value="ats"
            checked={selectedTemplate === "ats"}
            onChange={(e) => onTemplateChange(e.target.value)}
          />
          <span>ATS (Plain)</span>
        </label>
        <label className="selector-label">
          <input
            type="radio"
            name="template"
            value="modern"
            checked={selectedTemplate === "modern"}
            onChange={(e) => onTemplateChange(e.target.value)}
          />
          <span>Modern (Dark)</span>
        </label>
        <label className="selector-label">
          <input
            type="radio"
            name="template"
            value="minimal"
            checked={selectedTemplate === "minimal"}
            onChange={(e) => onTemplateChange(e.target.value)}
          />
          <span>Minimal (Sidebar)</span>
        </label>
      </div>

      {/* CV Accent Color Swatches - Hanya tampil untuk template yang mendukung warna (bukan ATS) */}
      {selectedTemplate !== "ats" && (
        <div className="cv-color-picker">
          <span className="color-picker-label">Accent Color:</span>
          <div className="color-swatches">
            {ACCENT_COLORS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`theme-swatch ${cvAccentColor === item.color ? "active" : ""}`}
                style={{ backgroundColor: item.color }}
                onClick={() => setCvAccentColor(item.color)}
                title={item.label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(TemplateSelector);
