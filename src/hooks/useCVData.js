import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";

export function useCVData() {
  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem("cvData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          summary: "",
          skills: "",
          experiences: [
            { id: Date.now(), jobTitle: "", company: "", workYear: "" },
          ],
          educations: [
            { id: Date.now() + 1, degree: "", school: "", eduYear: "" },
          ],
        };
  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem("selectedTemplate") || "modern";
  });

  const [errors, setErrors] = useState({});

  const [appTheme, setAppTheme] = useState("default");

  const [cvAccentColor, setCvAccentColor] = useState("#2c3e6b");

  useEffect(() => {
    document.body.style.setProperty("--cv-accent", cvAccentColor);
  }, [cvAccentColor]);

  useEffect(() => {
    if (appTheme === "default") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", appTheme);
    }
  }, [appTheme]);

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  function handleChange(e) {
    const { name, value } = e.target;

    // Filter khusus jika field phone, selain itu pakai value biasa
    const finalValue =
      name === "phone" ? value.replace(/[^0-9+\s-]/g, "").slice(0, 15) : value;

    setCvData({ ...cvData, [name]: finalValue });

    // Pesan error phone sekarang bisa terhapus otomatis saat diketik!
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function handleExpChange(index, e) {
    const updated = [...cvData.experiences];
    updated[index][e.target.name] = e.target.value;
    setCvData({ ...cvData, experiences: updated });
  }

  function addExperience() {
    setCvData({
      ...cvData,
      experiences: [
        ...cvData.experiences,
        { id: Date.now(), jobTitle: "", company: "", workYear: "" },
      ],
    });
  }

  function removeExperience(index) {
    const updated = cvData.experiences.filter((_, i) => i !== index);
    setCvData({ ...cvData, experiences: updated });
  }

  function moveExperienceUp(index) {
    if (index === 0) return;
    const updated = [...cvData.experiences];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setCvData({ ...cvData, experiences: updated });
  }

  function moveExperienceDown(index) {
    if (index === cvData.experiences.length - 1) return;
    const updated = [...cvData.experiences];
    [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    setCvData({ ...cvData, experiences: updated });
  }

  function handleDragEndExp(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cvData.experiences.findIndex(
        (exp) => exp.id === active.id,
      );
      const newIndex = cvData.experiences.findIndex(
        (exp) => exp.id === over.id,
      );

      const newExperiences = arrayMove(cvData.experiences, oldIndex, newIndex);
      setCvData({ ...cvData, experiences: newExperiences });
    }
  }

  function handleEduChange(index, e) {
    const updated = [...cvData.educations];
    updated[index][e.target.name] = e.target.value;
    setCvData({ ...cvData, educations: updated });
  }

  function addEducation() {
    setCvData({
      ...cvData,
      educations: [
        ...cvData.educations,
        { id: Date.now(), degree: "", school: "", eduYear: "" },
      ],
    });
  }

  function removeEducation(index) {
    const updated = cvData.educations.filter((_, i) => i !== index);
    setCvData({ ...cvData, educations: updated });
  }

  function moveEducationUp(index) {
    if (index === 0) return;
    const updated = [...cvData.educations];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setCvData({ ...cvData, educations: updated });
  }

  function moveEducationDown(index) {
    if (index === cvData.educations.length - 1) return;
    const updated = [...cvData.educations];
    [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    setCvData({ ...cvData, educations: updated });
  }

  function handleDragEndEdu(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cvData.educations.findIndex(
        (edu) => edu.id === active.id,
      );
      const newIndex = cvData.educations.findIndex((edu) => edu.id === over.id);

      const newEducations = arrayMove(cvData.educations, oldIndex, newIndex);
      setCvData({ ...cvData, educations: newEducations });
    }
  }

  function resetAll() {
    localStorage.removeItem("cvData");
    localStorage.removeItem("selectedTemplate");
    setCvData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      summary: "",
      skills: "",
      experiences: [{ jobTitle: "", company: "", workYear: "" }],
      educations: [{ degree: "", school: "", eduYear: "" }],
    });
    setSelectedTemplate("modern");
    setErrors({});
  }

  function validateStep(step) {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!cvData.name.trim()) newErrors.name = "Full name is required";
        if (!cvData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cvData.email))
          newErrors.email = "Email format is invalid";
        if (!cvData.phone.trim()) newErrors.phone = "Phone number is required";
        break;

      case 2:
        if (cvData.experiences.length > 0) {
          if (!cvData.experiences[0].jobTitle.trim()) {
            newErrors.jobTitle = "Job title is required for your first entry";
          }
          if (!cvData.experiences[0].company.trim()) {
            newErrors.company = "Company is required for your first entry";
          }
        }
        break;

      case 3:
        if (cvData.educations.length > 0) {
          if (!cvData.educations[0].school.trim()) {
            newErrors.school = "School/University name is required";
          }
        }
        break;

      case 4:
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return {
    cvData,
    selectedTemplate,
    setSelectedTemplate,
    errors,
    validateStep,
    handleChange,
    handleExpChange,
    addExperience,
    removeExperience,
    moveExperienceUp,
    moveExperienceDown,
    handleEduChange,
    addEducation,
    removeEducation,
    moveEducationUp,
    moveEducationDown,
    resetAll,
    handleDragEndExp,
    handleDragEndEdu,
    appTheme,
    setAppTheme,
    cvAccentColor,
    setCvAccentColor,
  };
}
