import Image from "next/image";

function Testimonials() {
    return (
        <div className="py-32 px-4 bg-gray-200">
          <h1 className="font-bold text-center text-4xl px-3">Phenom Institute Reviews: Don't Just Take our Word for it, See the Impact for Yourself</h1>
          <div className="flex flex-wrap lg:flex-nowrap justify-center py-16 px-10 gap-2">
            <div className="lg:w-1/4 rounded-lg bg-white p-4">
              <p className="font-bold text-6xl" >"</p>
              <p>I was amazed at how much I learned in just a few weeks. The Phenom Institute's Microsoft Word course helped me to create professional-looking documents and reports with ease. I highly recommend it!</p>
              <div className="flex align-middle pt-4">
                <Image src='/person-1.jpg' alt="img1" width={100} height={50} className="rounded-full" />
                  <div className="p-4">
                    <h1 className="font-bold text-xl">Emily R</h1>
                    <p className="text-sm">The Complete Microsoft Word Course</p>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/4 rounded-lg bg-white p-4">
              <p className="font-bold text-6xl" >"</p>
              <p>The Phenom Institute's Microsoft Excel course was a game-changer for me. I was able to learn advanced data analysis techniques and apply them to my job, which has made a huge impact on my productivity and efficiency. Thank you!</p>
              <div className="flex align-middle items-center pt-4">
                <Image src='/person-4.jpg' alt="img4" width={100} height={50} className="rounded-full" />
                  <div className="p-4">
                    <h1 className="font-bold text-xl">Sarah K</h1>
                    <p className="text-sm">The Complete Microsoft Excel Course</p>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/4 rounded-lg bg-white p-4">
              <p className="font-bold text-6xl" >"</p>
              <p>I was hesitant to take an online course, but the Phenom Institute's Web Development course exceeded my expectations. The instructors were knowledgeable and supportive, and the materials were top-notch. I was able to build a website that I'm proud of and has helped me to launch my career as a web developer. Thank you!</p>
              <div className="flex align-middle pt-4">
                <Image src='/person-2.jpg' alt="img2" width={100} height={50} className="rounded-full" />
                  <div className="p-4">
                    <h1 className="font-bold text-xl">Michael T</h1>
                    <p className="text-sm">Microsoft PowerPoint Course</p>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/4 rounded-lg bg-white p-4">
              <p className="font-bold text-6xl" >"</p>
              <p>I was amazed at how much I learned in just a few weeks. The Phenom Institute's Microsoft Word course helped me to create professional-looking documents and reports with ease. I highly recommend it!</p>
              <div className="flex align-middle pt-4">
                <Image src='/person-3.jpg' alt="img3" width={100} height={50} className="rounded-full" />
                  <div className="p-4">
                    <h1 className="font-bold text-xl">John D</h1>
                    <p className="text-sm">Web Development Bootcamp</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Testimonials;