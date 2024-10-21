import Image from "next/image";

function PaidCourses() {
    return (
        <>
            <div className="mt-10 pt-10 pb-24 px-10 border-t border-b  border-gray-400">
                <div className="pb-3">
                    <h2 className="font-semibold text-2xl">My Courses</h2>
                    <p>Get into the learning process</p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-2">
                    <div className="lg:w-1/4 rounded-lg bg-gray-100 border border-gray-300 transition ease-in-out duration-300 transform hover:scale-105">
                    <a href="/mycourse">
                        <Image src='/excel-course.jpg' alt="excel-course" width={350} height={300}  className="rounded-t-lg"/>    
                        <div className="p-4">
                            <h1 className="font-bold text-xl">The Complete Microsoft Excel Course</h1>
                            <p className="text-sm">Beginner Course</p>
                        </div>
                    </a>
                    </div>
                </div>
            </div>

            <div className="py-28 px-10 bg-gray-200 border-gray-700">
                <div className="pb-3">
                    <h2 className="font-semibold text-2xl">Purchase Other Courses</h2>
                    <p>Gain More from our Institute</p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="lg:w-1/4 rounded-lg bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
                        <Image src='/word-course.jpg' alt="word-course" width={350} height={300} className="rounded-t-lg" />
                        <a href="/dashboard">
                        <div className="p-4">
                            <h1 className="font-bold text-xl">The Complete Microsoft Word Course</h1>
                            <p className="text-sm">Beginner Course</p>
                            <p className="text-lg font-bold">₦12,000</p>
                        </div>
                        </a>
                    </div>
                    <div className="lg:w-1/4 rounded-lg bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
                        <Image src='/powerpoint-course.jpg' alt="powerpoint-course" width={350} height={300} className="rounded-t-lg" />
                        <a href="/dashboard">
                        <div className="p-4">
                            <h1 className="font-bold text-xl">The Complete Microsoft <br /> PowerPoint Course</h1>
                            <p className="text-sm">Beginner Course</p>
                            <p className="text-lg font-bold">₦14,000</p>
                        </div>
                        </a>
                    </div>
                    <div className="lg:w-1/4 rounded-lg bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
                        <Image src='/webdev-course.jpg' alt="webdev-course" width={350} height={300} className="rounded-t-lg" />
                        <a href="/dashboard">
                        <div className="p-4">
                            <h1 className="font-bold text-xl">Web Development Bootcamp: <br></br>From Beginner to Mastery</h1>
                            <p className="text-sm">Beginner Course</p>
                            <p className="text-lg font-bold">₦25,000</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaidCourses;