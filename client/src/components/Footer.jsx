import About from "./About.jsx";
import ContactInfo from "./ContactInfo.jsx";
import QuickMenu from "./QuickMenu.jsx";
import SocialMediaLinks from "./SocialMediaLinks.jsx";

export default function () {
    return <footer>
        <hr id={"footer-line"} />
        <About />
        <ContactInfo />
        <QuickMenu />
        <SocialMediaLinks />
    </footer>
}