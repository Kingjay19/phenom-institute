
export default function SignUp() {
    return (
        <div className="p-10 md:p-32 bg-white">
            <div className="lg:grid lg:grid-cols-12 bg-gray-200 rounded-3xl">
                <div className="hidden lg:block col-span-6 relative bg-[url('/signup-screen.webp')] bg-cover bg-center rounded-l-3xl"></div>
                <div className="leading-9 p-4 lg:px-16 rounded-3xl col-span-6 justify-items-center">
                    <h1 className="font-semibold text-3xl text-center py-2">Join us at Phenom Institute </h1>
                    <p className="text-center leading-normal pb-2 pt-1">Create an account to access our courses, resources and community</p>
                    <form>
                        <div className="py-1 flex flex-wrap justify-between">
                            <label htmlFor="full-name" className="text-sm">Full Name: </label>
                            <input type="text" id="full-name" className="w-full rounded-lg" required />
                        </div>
                        <div className="py-1 flex flex-wrap justify-between">
                            <label htmlFor="email" className="text-sm">Email Address: </label>
                            <input type="email" id="email" className="w-full rounded-lg" required />
                        </div>
                        <div className="py-1 flex flex-wrap justify-between">
                            <label htmlFor="password" className="text-sm">Password: </label>
                            <input type="password" id="password" className="w-full rounded-lg" required />
                        </div>
                        <div className="py-1 flex flex-wrap justify-between">
                            <label htmlFor="confirm-password" className="text-sm">Confirm Password: </label>
                            <input type="password" id="confirm-password" className="w-full rounded-lg" required />
                        </div>                    
                        <div className="pt-2 flex flex-wrap md:flex-nowrap justify-center"> 
                            <button type="submit" className="mx-auto text-sm bg-blue-700 hover:bg-blue-900 text-white w-full p-2 rounded-lg">
                                <a href="/dashboard">Sign Up</a>
                            </button>
                        </div>
                    </form>
                    <p className="text-center px-4 py-2 leading-normal text-sm">Already have an account? <a href="/signin" className="text-blue-900 underline">Log In</a></p>
                </div>
        </div>
            
            
        </div>
    )
}