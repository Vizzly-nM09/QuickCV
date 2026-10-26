import { useCVContext } from "../context/CVContext.jsx";
import { Sparkles } from "lucide-react";

export default function CompletenessMeter() {
  const { cvData } = useCVContext();

  // 1. Hitung poin & kumpulkan bagian yang masih belum lengkap
  let score = 0;
  const missing = [];

  // Personal Info Core (25 pts)
  let corePts = 0;
  if (cvData.name?.trim()) corePts += 9;
  if (cvData.email?.trim()) corePts += 8;
  if (cvData.phone?.trim()) corePts += 8;
  score += corePts;
  if (corePts < 25) {
    missing.push({ label: "Complete your personal contact details", pts: 25 - corePts });
  }

  // Work Experience (30 pts)
  const hasValidExp = cvData.experiences?.some(
    (e) => e.jobTitle?.trim() && e.company?.trim()
  );
  if (hasValidExp) {
    score += 30;
  } else {
    missing.push({ label: "Add at least 1 work experience", pts: 30 });
  }

  // Professional Summary (15 pts)
  if (cvData.summary?.trim()?.length >= 20) {
    score += 15;
  } else {
    missing.push({ label: "Write a brief summary (min. 20 chars)", pts: 15 });
  }

  // Education (15 pts)
  const hasValidEdu = cvData.educations?.some(
    (e) => e.school?.trim() && e.degree?.trim()
  );
  if (hasValidEdu) {
    score += 15;
  } else {
    missing.push({ label: "Add your education background", pts: 15 });
  }

  // Skills (15 pts - minimal 3 skill)
  const skillCount = cvData.skills
    ? cvData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean).length
    : 0;
  if (skillCount >= 3) {
    score += 15;
  } else {
    missing.push({ label: "List at least 3 skills", pts: 15 });
  }

  // Optional LinkedIn Booster (+5%, capped at 100)
  if (cvData.linkedin?.trim()) {
    score += 5;
  }

  // Clamp skor antara 0 - 100
  const finalScore = Math.min(100, Math.max(0, score));

  // 2. Tentukan Badge Tier
  function getTier(s) {
    if (s < 40) return { label: "Bad", className: "tier-bad" };
    if (s < 70) return { label: "Fair", className: "tier-fair" };
    if (s < 90) return { label: "Good", className: "tier-good" };
    return { label: "Excellent", className: "tier-excellent" };
  }

  const tier = getTier(finalScore);

  // 3. Ambil saran prioritas tertinggi
  const topSuggestion = missing.sort((a, b) => b.pts - a.pts)[0];

  return (
    <div className="completeness-card">
      <div className="completeness-header">
        <span className="completeness-label">CV COMPLETENESS</span>
        <div className="completeness-badge">
          <span className="completeness-score-number">{finalScore}%</span>
          <span className={`tier-pill ${tier.className}`}>{tier.label}</span>
        </div>
      </div>

      <div className="completeness-track">
        <div
          className={`completeness-fill ${tier.className}`}
          style={{ width: `${finalScore}%` }}
        />
      </div>

      <div className="completeness-hint">
        {finalScore === 100 ? (
          <span className="hint-success">
            <Sparkles size={14} className="sparkle-icon" /> Outstanding! Your CV profile is complete and ready to download.
          </span>
        ) : (
          <span>
            💡 <strong>Next Step:</strong> {topSuggestion?.label} (+{topSuggestion?.pts}%)
          </span>
        )}
      </div>
    </div>
  );
}
