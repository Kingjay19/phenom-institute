import Image from "next/image";
function Footer() {
    return (
        <div className="pt-32 pb-16 md:px-20 px-10 bg-blue-900 text-white lg:grid lg:grid-cols-12 gap-x-4">
            <div className="lg:col-span-6 p-2">
                <h1 className="font-semibold text-xl py-3">Get More Updates</h1>
                <h2>Join our mailing list to stay in the loop with the latest updates, new courses released and lots more</h2>
                <form>
                    <input type="email" placeholder="Your email...." required className="p-3 rounded-lg w-3/4" />
                    <button className="py-3 px-5 m-1 bg-blue-700 hover:bg-blue-900 border border-blue-700 hover:border-blue-900 rounded-xl">Sign Up</button>
                </form>
                <Image src='/Phenom_Institute_Logo.png' alt="Phenom Institute Logo" width={150} height={100} className="pt-32" />
                <p className="pt-3">&copy; 2023 Phenom Institute. All rights reserved.</p>
            </div>

            <div className="md:col-span-6 lg:col-span-3 p-2 pr-16">
                <h1 className="font-semibold text-lg py-3">Contact Us</h1>
                <ul className="leading-8">
                    <li className="flex items-center">
                        <Image src='/mail-icon.png' alt="mail-icon" width={25} height={25} />
                        <a href="mailto:info@phenominstitute.org" className="pl-3">info@phenominstitute.org</a>
                    </li>
                    <li className="flex items-center">
                        <Image src='/phone-icon.png' alt="phone-icon" width={25} height={25} />
                        <a href="tel:+1-555-123-4567" className="pl-3">+1-555-123-4567</a>
                    </li>
                    <li className="flex items-center">
                        <Image src='/form-icon.png' alt="form-icon" width={25} height={25} />
                        <a href="/" className="pl-3">Contact Form</a>
                    </li>
                </ul>
            </div>

            <div className="md:col-span-6 lg:col-span-3 p-2">
                <h5 className="font-semibold text-lg py-3">Stay Connected</h5>
                <ul className="leading-8">
                <li className="flex items-center">
                        <Image src='/facebook-icon.png' alt="facebook-icon" width={25} height={25} />
                        <a href="https://www.facebook.com/phenominstitute" className="pl-3">Facebook</a>
                    </li>
                    <li className="flex items-center">
                        <Image src='/twitter-icon.png' alt="twitter-icon" width={25} height={25} />
                        <a href="https://twitter.com/phenominstitute" className="pl-3">Twitter</a>
                    </li>
                    <li className="flex items-center">
                        <Image src='/linkedin-icon.png' alt="linkedin-icon" width={25} height={25} />
                        <a href="https://www.linkedin.com/company/phenominstitute" className="pl-3">LinkedIn</a>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}

export default Footer;