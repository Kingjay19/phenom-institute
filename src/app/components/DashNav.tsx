import Image from "next/image";

function DashNav() {
    return (
        <div className="bg-blue-900 p-4 flex justify-between">
            <Image src="/Phenom_Institute_Logo.png" alt="logo" width={100} height={30}/>
            <div className="flex">
                <div className="flex items-center bg-white border rounded-2xl  px-3">
                    <input type="text" placeholder="Search" className="w-96" />
                    <Image src="/search.png" alt="search-icon" width={20} height={20} />
                </div>
                <a href="/signin" className="py-3 px-5 ml-3 text-white hover:bg-blue-700 border hover:border-blue-700 rounded-xl">Log Out</a>
            </div>
        </div>
    )
}

export default DashNav