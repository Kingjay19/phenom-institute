import Image from "next/image";

function VideoList() {
    return (
        <div className="border border-gray-300 w-full p-6">
            <h1 className="font-semibold text-2xl border-b-2 border-gray-300">Course Contents</h1>
            <div className="">
                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Introduction to Excel</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>

                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Basic Formulas and Functions</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>

                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Data Formatting and Management</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>

                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Advanced Formulas and Functions</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>

                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Data Visualisation</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>

                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Introduction to Data Analysis</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>

                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Data Analysis Techniques</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>

                <div className="border border-gray-300 my-3">
                    <a href="/mycourse" className="flex items-center p-3">
                    <Image src="/player-icon.png" alt="player-icon" width={60} height={60} />
                    <div className="pl-6">
                        <p className="font-semibold text-lg">Data Management and Final Project</p>
                        <p className="text-sm">The Complete Microsoft Excel Course</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VideoList;