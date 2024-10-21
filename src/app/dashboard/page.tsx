import Footer from "../components/Footer"
import DashNav from "../components/DashNav"
import PaidCourses from "../components/PaidCourses"

export default function Dashboard() {
    return (
        <div>
            <DashNav />
            <h1 className="font-bold text-4xl pt-10 pl-10">Welcome!!</h1>
            <PaidCourses />
            <Footer />
        </div>
    )
}