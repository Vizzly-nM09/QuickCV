import { useCVContext } from "../../context/CVContext.jsx";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "../SortableItem";
import { Trash2, ChevronUp, ChevronDown, Plus } from "lucide-react";

function EducationForm() {
  const {
    cvData,
    handleEduChange,
    addEducation,
    removeEducation,
    moveEducationUp,
    moveEducationDown,
    errors,
    handleDragEndEdu,
  } = useCVContext();

  return (
    <div>
      <h2>Education</h2>

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEndEdu}
      >
        <SortableContext
          items={cvData.educations}
          strategy={verticalListSortingStrategy}
        >
          {cvData.educations.map((edu, index) => (
            <SortableItem key={edu.id} id={edu.id}>
              <div className="entry-block">
                {cvData.educations.length > 1 && (
                  <div className="entry-actions">
                    <button
                      className="btn remove-btn"
                      onClick={() => removeEducation(index)}
                    >
                      <Trash2 size={13} /> Remove
                    </button>
                    <div className="move-buttons">
                      <button
                        className="btn move-btn"
                        onClick={() => moveEducationUp(index)}
                        disabled={index === 0}
                        title="Move Up"
                      >
                        <ChevronUp size={14} />
                      </button>
                      <button
                        className="btn move-btn"
                        onClick={() => moveEducationDown(index)}
                        disabled={index === cvData.educations.length - 1}
                        title="Move Down"
                      >
                        <ChevronDown size={14} />
                      </button>
                    </div>
                  </div>
                )}

                <label>School / University</label>
                <input
                  name="school"
                  value={edu.school}
                  onChange={(e) => handleEduChange(index, e)}
                  placeholder="e.g. Universitas Internasional Batam"
                  className={errors.school && index === 0 ? "input-error" : ""}
                />
                {errors.school && index === 0 && (
                  <span className="error-msg">{errors.school}</span>
                )}

                <label>Degree</label>
                <input
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleEduChange(index, e)}
                  placeholder="e.g. S1 Informatika"
                />

                <label>Year</label>
                <input
                  name="eduYear"
                  value={edu.eduYear}
                  onChange={(e) => handleEduChange(index, e)}
                  placeholder="e.g. 2021 - 2025"
                />
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
      <button className="btn add-btn" onClick={addEducation}>
        <Plus size={15} /> Add Education
      </button>
      <hr />
    </div>
  );
}
export default EducationForm;
