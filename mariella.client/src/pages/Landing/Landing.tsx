import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AfterIntroBlockContent from "../../content/AfterIntroBlockContent.json";
import GradeControlContent from "../../content/GradeControlContent.json";
import MarketplaceContent from "../../content/MarketplaceContent.json";
import GetGradeContent from "../../content/GetGradeContent.json";
import ContactContent from "../../content/ContactContent.json";
import Footer from "./components/Footer";
import Header from "./components/Header";

const BackgroundCircle = lazy(() => import("./components/BackgroundCircle"));
const Contact = lazy(() => import("./components/ContactForm"));
const MiddleBlock = lazy(() => import("./components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop/ScrollToTop"));
const ContentBlock = lazy(() => import("./components/ContentBlock"));

const Landing = () => {
    return (
        <Container>
            <BackgroundCircle icon="circle.svg" />
            <Header />
            <ScrollToTop />
            <ContentBlock
                direction="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="developer.svg"
                id="intro"
            />
            <MiddleBlock
                title={AfterIntroBlockContent.title}
                content={AfterIntroBlockContent.text}
                button={AfterIntroBlockContent.button}
            />
            <ContentBlock
                direction="left"
                title={GradeControlContent.title}
                content={GradeControlContent.text}
                section={GradeControlContent.section}
                icon="graphs.svg"
                id="control"
            />
            <ContentBlock
                direction="right"
                title={MarketplaceContent.title}
                content={MarketplaceContent.text}
                icon="product-launch.svg"
                id="marketplace"
            />
            <ContentBlock
                direction="left"
                title={GetGradeContent.title}
                content={GetGradeContent.text}
                icon="waving.svg"
                id="grade"
            />
            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
            />
            <Footer />
        </Container>
    );
};

export default Landing;
