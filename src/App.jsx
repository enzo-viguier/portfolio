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
            <Wave TopColor="##f3f4f6" BottomColor="#0F172A" />
            <Technologies></Technologies>
            <Wave TopColor="#0F172A" BottomColor="#f3f4f6" />
            <Testimony></Testimony>
            <Contact></Contact>
        </>
    )
}

export default App
