import VideoPlayer from "../components/Videoplayer"
import Footer from "../components/Footer"
import DashNav from "../components/DashNav"
import VideoList from "../components/Videolist"

export default function Dashboard() {
    return (
        <div>
            <DashNav />
            <div className="flex flex-wrap lg:flex-nowrap">   
                <VideoPlayer />
                <VideoList />
            </div>
            
            <Footer />
        </div>
    )
}