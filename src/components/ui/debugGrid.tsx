'use client';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";



export function DebugGrid() {
    
    const [showGrid, setShowGrid] = useState(false);

    const GridButton = () => {
        return (
        <div className="fixed bottom-4 right-4 z-10000">
            <button 
                onClick={() => setShowGrid(!showGrid)}
                className="cursor-pointer rounded-xl p-2 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 flex items-center gap-2"
            >   
                <span className="text-xs text-white">Grid</span>
                {showGrid ? <EyeOff className="w-4 h-4 text-white" /> : <Eye className="w-4 h-4 text-white" />}
            </button>
        </div>
        )
    }

    const grid = (
        <>
        <div className="fixed inset-0 pointer-events-none z-10000">
            <div className="bold-container h-full grid grid-cols-12">
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
                <div className="h-full border border-blue-500"></div>
            </div>
        </div>
        <GridButton />
        </>
    );
    return showGrid ? grid : (
        <GridButton />
    );
}