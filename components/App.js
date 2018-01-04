import Headline from './Headline'
import ShowcaseVideo from './ShowcaseVideo'
import Welcome from './Welcome'
import Intro from './Intro'
import Portfolio from './Portfolio'

const App = () =>
    <div>
        <ShowcaseVideo />
        <Headline name="Harrison McGuire" tagline="Web Developer and Game Developer" />
        <Welcome />
        <Intro />
        <Portfolio />
    </div>

export default App