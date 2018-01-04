import Card from './Card'
import SectionTitle from './SectionTitle'

const Portfolio = () =>
    <div className="portfolio">
        <SectionTitle title="Portfolio" />
        <div className="wrapper">

            <div className="one">
                <Card link="https://unrealcpp.com/" title="Unreal C++" description="GatsbyJS site dedicated to Unreal Engine 4 C++ tutorials" background="https://source.unsplash.com/collection/905011/1000x1000" />
            </div>

            <div className="two">
                <Card link="https://severallevels.io/" title="Several Levels" description="Gatsby app using React" background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1514982221/harrison-mcguire_uvgv5x.jpg" />
            </div>

        </div>
    
        <div className="wrapper-second">

            <div className="three">
                <Card link="http://insider.directv.com/" title="DIRECTV" description="Custom WordPress theme for DIRECTV's blog" background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1514982221/harrison-mcguire_uvgv5x.jpg" />
            </div>

            <div className="four">
                <Card  link="http://hfscompanies.com/" title="HFS" description="Angualar 1 single page app for Hartfield Financial Solutions" background="https://source.unsplash.com/collection/905011/1000x1000" />
            </div>

            <div className="five">
                <Card  link="https://lightdepgreenhouse.com/" title="Greenhouse" description="Custom Shopify solution" background="https://source.unsplash.com/collection/905011/1000x1000" />
            </div>
        
        </div>

        {/* https://harrison1.github.io/code-foo-2015/ */}
        {/* http://m.ign.com/blogs */}
        {/* http://franchiselending.org/ */}
        {/* https://play.google.com/store/apps/details?id=com.harrisonmcguire.segify */}
        {/* https://play.google.com/store/apps/details?id=com.versatileproductions.hm */}
        {/* https://play.google.com/store/books/details/Harrison_McGuire_Miami_and_Me?id=aviBBwAAQBAJ */}
        <style jsx>{`
            .portfolio {
                background-color: #00bcd4;
                padding: 5rem 0;
            }
            .wrapper {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas: 
                    "one" 
                    "two"; 
                grid-row-gap: 2rem;
                margin: auto;
                max-width: 1200px;
                padding: 15px;
            }
            .wrapper-second {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas: 
                    "three" 
                    "four"
                    "five"; 
                grid-row-gap: 2rem;
                margin: auto;
                max-width: 1200px;
                padding: 15px;
            }
            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .three {
                grid-area: three;
            }
            .four {
                grid-area: four;
            }
            .five {
                grid-area: five;
            }
            @media (min-width: 800px) {
                .wrapper {
                    grid-template-areas:
                        "one two";
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
                .wrapper-second {
                    grid-template-areas:
                        "three four five";
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
            }
        `}</style>
    </div>

export default Portfolio