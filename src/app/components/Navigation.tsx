import Image from "next/image";

function Navigation() {
    return (
        <header className="bg-gray-900 p-4 flex justify-between items-center sticky top-0 z-50">
            <Image src="/Phenom_Institute_Logo.png" alt="logo" width={100} height={80}/>
            <div className="text-white text-sm">
            <a href="/signin" className="py-3 px-5 m-1 hover:bg-gray-200 hover:text-gray-900 border rounded-xl">Sign In</a>
            <a href="/signup" className="py-3 px-5 m-1 bg-blue-700 hover:bg-blue-900 border border-blue-700 hover:border-blue-900 rounded-xl">Join for Free</a>
            </div>
      </header>
    )
}

export default Navigation;