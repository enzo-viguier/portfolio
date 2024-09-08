import './App.css'
import Hero from "./component/Hero.jsx";
import Wave from "./component/Wave.jsx";
import CvBand from "./component/CVBand.jsx";
import Projects from "./component/Projects.jsx";
import Technologies from "./component/Technologies.jsx";
import Testimony from "./component/Testimony.jsx";
import Contact from "./component/Contact.jsx";

function App() {

    return (
        <>
            <Hero></Hero>
            <CvBand></CvBand>
            <Projects></Projects>
            <Wave TopColor="#FFFFFF" BottomColor="#0F172A" />
            <Technologies></Technologies>
            <Wave TopColor="#0F172A" BottomColor="#FFFFFF" />
            <Testimony></Testimony>
            <Contact></Contact>
        </>
    )
}

export default App
