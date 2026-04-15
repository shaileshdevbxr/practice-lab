"use client";

import { DragData } from '@/types/types'
import React, { useRef } from 'react'

interface DragDropProps {
    initialData: DragData
}
type ContainerKey = keyof DragData;

const DragDrop = ({ initialData }: DragDropProps) => {
    const [data, setData] = React.useState<DragData>(initialData);
    const dragContainer = useRef<ContainerKey | null>(null);
    const dragItem = useRef<string | null>(null);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, container: ContainerKey, item: string) => {
        event.currentTarget.style.opacity = "0.5";
        dragContainer.current = container;
        dragItem.current = item;
    }

    const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.style.opacity = "1";
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, targetContainer: ContainerKey) => {
        const item = dragItem.current as string;
        const sourceContainer = dragContainer.current as ContainerKey;
        setData(prev => {
            const newData = { ...prev };
            newData[sourceContainer] = newData[sourceContainer].filter(i => i !== item);
            newData[targetContainer] = [...newData[targetContainer], item]
            return newData
        })
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    return (
        <div className='w-full h-full rounded-lg bg-[var(--background-secondary)]/10 p-10 flex items-center gap-10 justify-between'>
            {
                (Object.keys(data) as ContainerKey[])?.map((container, idx) => {
                    return (
                        <div key={idx} className='px-4 py-2 rounded-lg bg-[var(--background-secondary)]/30 space-y-2'
                            onDragOver={event => handleDragOver(event)}
                            onDrop={(event) => handleDrop(event, container)}
                        >
                            <h2 className='text-xl font-bold capitalize'>{container}</h2>

                            <div className="flex flex-col gap-4 bg-[var(--background-secondary)]/50 p-2 rounded-lg ">
                                {
                                    data[container]?.map((item, index) => {
                                        return (
                                            <div
                                                className='bg-[var(--background-secondary)] p-2 rounded-md '
                                                draggable
                                                key={index}
                                                onDragStart={(event) => handleDragStart(event, container, item)}
                                                onDragEnd={event => handleDragEnd(event)}
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
