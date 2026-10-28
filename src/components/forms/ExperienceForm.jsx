import { useCVContext } from "../../context/CVContext.jsx";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "../SortableItem";
import { Trash2, ChevronUp, ChevronDown, Plus } from "lucide-react";

function ExperienceForm() {
  const {
    cvData,
    handleExpChange,
    removeExperience,
    addExperience,
    moveExperienceUp,
    moveExperienceDown,
    errors,
    handleDragEndExp,
  } = useCVContext();

  return (
    <div>
      <h2>Work Experience</h2>

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEndExp}
      >
        <SortableContext
          items={cvData.experiences}
          strategy={verticalListSortingStrategy}
        >
          {cvData.experiences.map((exp, index) => (
            <SortableItem key={exp.id} id={exp.id}>
              <div className="entry-block">
                {cvData.experiences.length > 1 && (
                  <div className="entry-actions">
                    <button
                      className="btn remove-btn"
                      onClick={() => removeExperience(index)}
                    >
                      <Trash2 size={13} /> Remove
                    </button>
                    <div className="move-buttons">
                      <button
                        className="btn move-btn"
                        onClick={() => moveExperienceUp(index)}
                        disabled={index === 0}
                        title="Move Up"
                      >
                        <ChevronUp size={14} />
                      </button>
                      <button
                        className="btn move-btn"
                        onClick={() => moveExperienceDown(index)}
                        disabled={index === cvData.experiences.length - 1}
                        title="Move Down"
                      >
                        <ChevronDown size={14} />
                      </button>
                    </div>
                  </div>
                )}

                <label>Job Title</label>
                <input
                  name="jobTitle"
                  value={exp.jobTitle}
                  onChange={(e) => handleExpChange(index, e)}
                  placeholder="e.g. Frontend Developer"
                  className={
                    errors.jobTitle && index === 0 ? "input-error" : ""
                  }
                />
                {errors.jobTitle && index === 0 && (
                  <span className="error-msg">{errors.jobTitle}</span>
                )}

                <label>Company</label>
                <input
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleExpChange(index, e)}
                  placeholder="e.g. UIB"
                  className={errors.company && index === 0 ? "input-error" : ""}
                />
                {errors.company && index === 0 && (
                  <span className="error-msg">{errors.company}</span>
                )}

                <label>Year</label>
                <input
                  name="workYear"
                  value={exp.workYear}
                  onChange={(e) => handleExpChange(index, e)}
                  placeholder="e.g. 2023 - Present"
                />
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>

      <button className="btn add-btn" onClick={addExperience}>
        <Plus size={15} /> Add Experience
      </button>
      <hr />
    </div>
  );
}

export default ExperienceForm;
