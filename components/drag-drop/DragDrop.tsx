"use client";

import { DragData } from "@/types/types";
import React, { useRef } from "react";

type ContainerKey = keyof DragData;

interface DragDropProps {
    initialData: DragData;
}

const DragDrop = ({ initialData }: DragDropProps) => {
    const [data, setData] = React.useState<DragData>(initialData);

    const dragContainer = useRef<ContainerKey | null>(null);
    const dragItem = useRef<string | null>(null);
    const dragItemIndex = useRef<number | null>(null);
    const dragOverItemIndex = useRef<number | null>(null);

    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        container: ContainerKey,
        item: string,
        index?: number,
    ) => {
        event.currentTarget.style.opacity = "0.5";
        dragContainer.current = container;
        dragItem.current = item;
        if (index !== undefined) dragItemIndex.current = index;
    };

    const handleDragEnd = (
        event: React.DragEvent<HTMLDivElement>,
        container: ContainerKey,
    ) => {
        event.currentTarget.style.opacity = "1";
        if (
            dragItemIndex?.current === null ||
            dragOverItemIndex?.current === null ||
            dragItemIndex.current === dragOverItemIndex.current
        )
            return;
        dragItem.current = null;
        dragContainer.current = null;
        dragItem.current = null;
        dragContainer.current = null;
    };

    const handleDrop = (
        event: React.DragEvent<HTMLDivElement>,
        targetContainer: ContainerKey,
    ) => {
        const item = dragItem.current as string;
        const sourceContainer = dragContainer.current as ContainerKey;
        if (sourceContainer === targetContainer) return;
        setData((prev) => {
            const newData = { ...prev };
            newData[sourceContainer] = newData[sourceContainer].filter(
                (i) => i !== item,
            );
            newData[targetContainer] = [...newData[targetContainer], item];
            return newData;
        });
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    const handleDragEnter = (
        event: React.DragEvent<HTMLDivElement>,
        index: number,
        container: ContainerKey,
    ) => {
        if (index !== undefined) dragOverItemIndex.current = index;
        if (dragItemIndex.current === null) return;
        const fromIndex = dragItemIndex.current;
        const toIndex = index;
        if (fromIndex === toIndex) return;
        const newItems = [...data[container]];
        [newItems[fromIndex], newItems[toIndex]] = [
            newItems[toIndex],
            newItems[fromIndex],
        ];
        // update index so continuous dragging works smoothly
        dragItemIndex.current = toIndex;
        setData((prev) => ({ ...prev, [container]: newItems }));
    };
    return (
        <div className="w-full h-full rounded-lg bg-[var(--background-secondary)]/10 p-10 flex items-center gap-10 justify-between">
            {(Object.keys(data) as ContainerKey[]).map((container, idx) => (
                <div
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-[var(--background-secondary)]/30 space-y-2"
                    onDragOver={handleDragOver}
                    onDrop={(event) => handleDrop(event, container)}
                >
                    <h2 className="text-xl font-bold capitalize">{container}</h2>

                    <div className="flex flex-col gap-4 bg-[var(--background-secondary)]/50 p-2 rounded-lg">
                        {data[container]?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[var(--background-secondary)] p-2 rounded-md cursor-grab transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-95"
                                draggable
                                onDragStart={(event) =>
                                    handleDragStart(event, container, item, index)
                                }
                                onDragEnd={(event) => handleDragEnd(event, container)}
                                onDragEnter={(event) =>
                                    handleDragEnter(event, index, container)
                                }
                                onDragOver={handleDragOver}
                            >
                                <b>{item}</b>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DragDrop;
