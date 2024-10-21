export default function SignIn() {
    return (
        <div className="p-10 md:p-32 bg-white">
            <div className="lg:grid lg:grid-cols-12 bg-gray-200 rounded-3xl">
                <div className="hidden lg:block col-span-6 relative bg-[url('/signin-screen.webp')] bg-cover bg-center rounded-l-3xl"></div>
                <div className="leading-10 p-4 lg:px-10 lg:py-auto rounded-3xl col-span-6 justify-items-center">
                    <h1 className="font-semibold text-3xl text-center py-2">Log In </h1>
                    <p className="text-center leading-normal pt-1 pb-2">Sign Into your account to continue</p>
                    <form>
                        <div className="py-1 flex flex-wrap justify-between">
                            <label htmlFor="email">Email Address: </label>
                            <input type="email" id="email" className="w-full rounded-lg" required />
                        </div>
                        <div className="py-1 flex flex-wrap justify-between">
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" className="w-full rounded-lg" required />
                        </div>                   
                        <div className="my-2 py-2 flex flex-wrap md:flex-nowrap justify-center">
                            <button type="submit" className="mx-auto bg-blue-700 hover:bg-blue-900 text-white w-full px-6 rounded-lg">
                                <a href="/dashboard">Log In</a>
                            </button>
                        </div>
                    </form>
                    <p className="text-center px-4 py-2 leading-normal">Dont have an account? <a href="/signup" className="text-blue-900 underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}