"use client";
import ReactPlayer from "react-player";

const videosrc = "/videos/excel-logic-functions.mp4";
export default function VideoPlayer() {

    return (
        <div className="p-6">
            {/* VIDEO TITLE SECTION */}
            <h1 className="font-semibold text-2xl">Introduction to Excel</h1>
            
            {/* VIDEO PLAYER SECTION */}
            <ReactPlayer
                width="800px"
                height="500px"
                url={videosrc}
                controls={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <source src={videosrc} type="video/mp4" />
            
            {/* VIDEO CONTENT SECTION */}
            <div className="mt-6 py-3 border-t-2 border-gray-300">
                <p className="font-semibold text-lg">Video Contents</p>
                <ul>
                    <li>1. Overview of Microsoft Excel</li>
                    <li>2. Excel Interface and Navigation</li>
                    <li>3. Entering and Editing Data</li>
                    <li>4. Saving and Organizing Workbooks</li>
                </ul>
            </div>
            
        </div>
    )
}