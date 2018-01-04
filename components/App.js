import Headline from './Headline'
import ShowcaseVideo from './ShowcaseVideo'
import Intro from './Intro'
import Portfolio from './Portfolio'

const App = () =>
    <div>
        <ShowcaseVideo />
        <Headline name="Harrison McGuire" tagline="Web Developer and Game Developer" />
        <Intro />
        <Portfolio />
    </div>

export default App