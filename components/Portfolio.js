import Card from './Card'
import SectionTitle from './SectionTitle'

const Portfolio = () =>
    <div className="portfolio">
        <SectionTitle title="Portfolio" />
        <div className="first">

            <div className="one">
                <Card link="https://unrealcpp.com/" title="Unreal C++" description="GatsbyJS site dedicated to Unreal Engine 4 C++ tutorials." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515063852/unrealcpp_j8skuw.png" />
            </div>

            <div className="two">
                <Card link="https://severallevels.io/" title="Several Levels" description="Gatsby app using React" background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515063851/severallevels_uebkis.png" />
            </div>

        </div>
    
        <div className="second">

            <div className="three">
                <Card link="http://insider.directv.com/" title="DIRECTV" description="Custom WordPress theme for DIRECTV's blog" background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515063853/directv_nbrvkn.png" />
            </div>

            <div className="four">
                <Card  link="http://hfscompanies.com/" title="HFS" description="Angualar 1 single page app for Hartfield Financial Solutions" background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515063853/hfs_upkvbz.png" />
            </div>

            <div className="five">
                <Card  link="https://lightdepgreenhouse.com/" title="Greenhouse" description="Custom Shopify solution" background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515063852/lightdep_folscd.png" />
            </div>
        
        </div>

        <div className="third">

        
            <div className="six">
                <Card link="http://franchiselending.org/" title="FLA" description="Franchise Lending of America. A static HTML site." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515068465/franchise-lending_jo5ja1.png" />
            </div>

            
            <div className="seven">
                <Card link="https://harrison1.github.io/code-foo-2015/" title="Code Foo" description="Simple Bootstrap site made for an IGN Code Foo application. I interned at IGN for 6 weeks, it was a great experience." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515068466/ign-code-foo_zgh5sr.png" />
            </div>

        </div>

        
        <div className="fourth">
        
            <div className="eight">
                <Card link="https://play.google.com/store/apps/details?id=com.versatileproductions.hm" title="Run For Your Life" description="Run For Your Life or Die. Hey, the name says it all. This is an endless runner made in Unity." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515198644/run-for-your-life_fvsmyl.jpg" />
            </div>

            
            <div className="nine">
                <Card link="https://play.google.com/store/apps/details?id=com.SquirrelsCantFightUpsideDown.MyLostPyramid" title="My Lost Pyramid" description="A musical tap game made in Unity." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515068465/my-lost-pyramid_cfguxg.jpg" />
            </div>

        </div>

        <div className="second">

            <div className="three">
                <Card link="https://play.google.com/store/apps/details?id=com.harrisonmcguire.segify" title="Segify" description="Android app highlighting Sega subreddits." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515069915/segifycard_l19wgn.png" />
            </div>

            <div className="four">
                <Card  link="https://itunes.apple.com/us/book/miami-and-me/id979353607?ls=1&mt=11" title="Miami and Me" description="Ebook I made with other members of the Starters Mob club at while at the University of Miami." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515069915/miamiandme_amtqgk.png" />
            </div>

            <div className="five">
                <Card  link="http://harrison1.github.io/personalwebsite/" title="Old Personal Site" description="Old personal website. It's fun to look into the past sometimes." background="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515069915/personal-website_vjjebj.png" />
            </div>

        </div>

        <style jsx>{`
            .portfolio {
                background-color: #00bcd4;
                padding: 5rem 0;
            }
            .first {
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
            .second {
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
            .third {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas: 
                    "six" 
                    "seven";
                grid-row-gap: 2rem;
                margin: auto;
                max-width: 1200px;
                padding: 15px;
            }
            .fourth {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas:  
                    "eight"
                    "nine"; 
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
            .six {
                grid-area: six;
            }
            .seven {
                grid-area: seven;
            }
            .eight {
                grid-area: eight;
            }
            .nine {
                grid-area: nine;
            }
            @media (min-width: 800px) {
                .first {
                    grid-template-areas:
                        "one two";
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
                .second {
                    grid-template-areas:
                        "three four five";
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
                .third {
                    grid-template-areas:
                        "six seven";
                    grid-template-columns: 1.5fr 1fr;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
                .fourth {
                    grid-template-areas:
                        "eight nine";
                    grid-template-columns: 1fr 1.5fr;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
            }
        `}</style>
    </div>

export default Portfolio