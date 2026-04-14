import DragDrop from "@/components/drag-drop/DragDrop";
import { dragData } from "@/data/dragData";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <DragDrop initialData={dragData} />
    </div>
  );
}
