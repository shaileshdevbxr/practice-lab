"use client";

import { DragData } from '@/types/types'
import React from 'react'

interface DragDropProps {
    initialData: DragData
}

const DragDrop = ({ initialData }: DragDropProps) => {
    const [data, setData] = React.useState<DragData>(initialData)

    return (
        <div className='w-full h-full rounded-lg bg-[var(--background-secondary)]/10 p-10 flex items-center gap-10 justify-between'>
            {
                Object.keys(data)?.map((container, idx) => {
                    return (
                        <div key={idx} className='px-4 py-2 rounded-lg bg-[var(--background-secondary)]/30 space-y-2'>
                            <h2 className='text-xl font-bold capitalize'>{container}</h2>

                            <div className="flex flex-col gap-4 bg-[var(--background-secondary)]/50 p-2 rounded-lg ">
                                {
                                    data[container]?.map((item, index) => {
                                        return (
                                            <div className='bg-[var(--background-secondary)] p-2 rounded-md'
                                                draggable
                                            >
                                                <b>{item}</b>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DragDrop
