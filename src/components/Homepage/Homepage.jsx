import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels } from '../../container';
import { Navbar } from '../../components';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default Homepage;