import HeadlineRetro from './HeadlineRetro'
import ShowcaseVideo from './ShowcaseVideo'
import Welcome from './Welcome'
import Intro from './Intro'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Social from './Social'
import Education from './Education'
import Contact from './Contact'
import Retro from './Retro'

const App = () =>
    <div>
        <Retro />
        <HeadlineRetro name="Harrison McGuire" tagline="Web Developer | Game Developer" />
        <Welcome />
        <Intro />
        <Portfolio />
        <Skills />
        <Social />
        <Education />
        <Contact />
    </div>

export default App