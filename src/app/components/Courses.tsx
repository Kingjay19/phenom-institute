import Image from "next/image";

function Courses() {
    return (
        <div className="py-32">
        <div className="text-center px-10">
          <h1 className="font-bold text-4xl">Stay Ahead of the Curve</h1>
          <p className="text-lg md:px-20 lg:px-32">Our dynamic course library features over 5,000 online video courses, with fresh content added monthly, ensuring you have access to the latest knowledge and skills to fuel your success.</p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center py-16 px-10 gap-2">
          <div className="lg:w-1/4 rounded-lg bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
            <a href="/">
              <Image src='/word-course.jpg' alt="word-course" width={350} height={300} className="rounded-t-lg" />
              <div className="p-4">
                <h1 className="font-bold text-xl">The Complete Microsoft Word Course</h1>
                <p className="text-sm">Beginner Course</p>
                <p className="text-lg font-bold">₦12,000</p>
              </div>
            </a>
          </div>
          <div className="lg:w-1/4 rounded-lg bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
            <a href="/">
              <Image src='/excel-course.jpg' alt="excel-course" width={350} height={300}  className="rounded-t-lg"/>
              <div className="p-4">
                <h1 className="font-bold text-xl">The Complete Microsoft Excel Course</h1>
                <p className="text-sm">Beginner Course</p>
                <p className="text-lg font-bold">₦15,000</p>
              </div>
            </a>
          </div>
          <div className="lg:w-1/4 rounded-lg bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
            <a href="/">
              <Image src='/powerpoint-course.jpg' alt="powerpoint-course" width={350} height={300} className="rounded-t-lg" />
              <div className="p-4">
                <h1 className="font-bold text-xl">The Complete Microsoft <br /> PowerPoint Course</h1>
                <p className="text-sm">Beginner Course</p>
                <p className="text-lg font-bold">₦14,000</p>
              </div>
            </a>
          </div>
          <div className="lg:w-1/4 rounded-lg bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
            <a href="/">
              <Image src='/webdev-course.jpg' alt="webdev-course" width={350} height={300} className="rounded-t-lg" />
              <div className="p-4">
                <h1 className="font-bold text-xl">Web Development Bootcamp: <br></br>From Beginner to Mastery</h1>
                <p className="text-sm">Beginner Course</p>
                <p className="text-lg font-bold">₦25,000</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Courses;