import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

function SortableItem({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: "relative",
    zIndex: isDragging ? 1 : 0,
    border: "1px solid #2a2a4a",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "8px",
    backgroundColor: "var(--bg-card)",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div
        {...attributes}
        {...listeners}
        className="drag-header"
        title="Drag to reorder"
      >
        <GripVertical size={13} />
        <span>Drag to reorder</span>
      </div>

      <div className="sortable-content">{children}</div>
    </div>
  );
}

export default SortableItem;
