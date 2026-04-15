import DragDrop from '@/components/drag-drop/DragDrop'
import { dragData } from '@/data/dragData'
import React from 'react'

const page = () => {
  return (
       <div className="w-full h-screen">
      <DragDrop initialData={dragData} />
    </div>
  )
}

export default page
