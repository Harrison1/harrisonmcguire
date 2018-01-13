import Card from './Card'
import SectionTitleBlue from './SectionTitleBlue'
import LazyLoad from 'react-lazyload'

const Portfolio = () =>
    <div className="portfolio">

        <SectionTitleBlue title="Portfolio" />

        <div className="wrapper">

            <div className="one">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515063852/unrealcpp_j8skuw.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515063852/unrealcpp_j8skuw.png" link="https://unrealcpp.com/" title="Unreal C++" description="GatsbyJS site dedicated to Unreal Engine 4 C++ tutorials." color="rgba(102, 51, 153, 0.6)"/>
                </LazyLoad>
            </div>

            <div className="two">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515063851/severallevels_uebkis.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515063851/severallevels_uebkis.png" link="https://severallevels.io/" title="Several Levels" description="Gatsby app using React" color="rgba(5, 116, 172, 0.7)" />
                </LazyLoad>
            </div>

            <div className="three">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515063853/directv_nbrvkn.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515063853/directv_nbrvkn.png" link="http://insider.directv.com/" title="DIRECTV" description="Custom WordPress theme for DIRECTV's blog" background="https://res.cloudinary.com/dz09rnbhe/image/upload/w_800/v1515063852/unrealcpp_j8skuw.png" color="rgba(5, 116, 172, 0.6)" />
                </LazyLoad>
            </div>

        </div>

        <div className="wrapper">
            <div className="one">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515063853/hfs_upkvbz.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515063853/hfs_upkvbz.png" link="http://hfscompanies.com/" title="HFS" description="Angualar 1 single page app for Hartfield Financial Solutions" color="rgba(78, 133, 204, 0.6);"/>
                </LazyLoad>
            </div>
            <div className="two">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515063852/lightdep_folscd.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515063852/lightdep_folscd.png" link="https://lightdepgreenhouse.com/" title="Greenhouse" description="Custom Shopify solution" color="rgba(130, 175, 64, 0.6)"/>
                </LazyLoad>
            </div>
            <div className="three">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515068465/franchise-lending_jo5ja1.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515068465/franchise-lending_jo5ja1.png" link="http://franchiselending.org/#home" title="FLA" description="Franchise Lending of America. A static HTML site." color="rgba(0,0,0,0.6)" />
                </LazyLoad>
            </div>
        </div>

        <div className="wrapper">
            <div className="one">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515068466/ign-code-foo_zgh5sr.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515068466/ign-code-foo_zgh5sr.png" link="https://harrison1.github.io/code-foo-2015/" title="Code Foo" description="Simple Bootstrap site made for an IGN Code Foo application. I interned at IGN for 6 weeks, it was a great experience." color="rgba(230,101,7,0.6)" />
                </LazyLoad>
            </div>
            <div className="two">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515198644/run-for-your-life_fvsmyl.jpg" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515198644/run-for-your-life_fvsmyl.jpg" link="https://play.google.com/store/apps/details?id=com.versatileproductions.hm" title="Run For Your Life" description="Run For Your Life or Die. Hey, the name says it all. This is an endless runner made in Unity." color="rgba(230,7,7,0.6)" />
                </LazyLoad>
            </div>
            <div className="three">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515068465/my-lost-pyramid_cfguxg.jpg" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515068465/my-lost-pyramid_cfguxg.jpg" link="https://play.google.com/store/apps/details?id=com.SquirrelsCantFightUpsideDown.MyLostPyramid" title="My Lost Pyramid" description="A musical tap game made in Unity." color="rgba(247,4,161,0.6)" />
                </LazyLoad>
            </div>
        </div>


        <div className="wrapper">

            <div className="one">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515069915/segifycard_l19wgn.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515069915/segifycard_l19wgn.png" link="https://play.google.com/store/apps/details?id=com.harrisonmcguire.segify" title="Segify" description="Android app highlighting Sega subreddits." color="rgba(190,193,39,0.6)" />
                </LazyLoad>
            </div>

            <div className="two">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515069915/miamiandme_amtqgk.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515069915/miamiandme_amtqgk.png" link="https://itunes.apple.com/us/book/miami-and-me/id979353607?ls=1&mt=11" title="Miami and Me" description="Ebook I made with other members of the Starters Mob club at while at the University of Miami." color="rgba(129,255,227,0.6)" />
                </LazyLoad>
            </div>

            <div className="three">
                <LazyLoad height={400} offset={300}>
                    <Card srcPreload="https://res.cloudinary.com/dz09rnbhe/image/upload/w_10/v1515069915/personal-website_vjjebj.png" srcLoaded="https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515069915/personal-website_vjjebj.png" link="http://harrison1.github.io/personalwebsite/" title="Old Personal Site" description="Old personal website. It's fun to look into the past sometimes." color="rgba(68,68,68,0.6)" />
                </LazyLoad>
            </div>

        </div>

        <style jsx>{`
            .portfolio {
                padding: 5rem 0;
            }
            .wrapper {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas: 
                    "one" 
                    "two"
                    "three"; 
                grid-row-gap: 2rem;
                margin: auto;
                width: 100%;
                padding: 0px;
                margin-bottom: 2rem;
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
            @media (min-width: 800px) {
                .wrapper {
                    grid-template-areas:
                        "one two three";
                    grid-template-columns: 1fr 1fr 1fr;
                    margin-bottom: 0;
                }
            }
        `}</style>
    </div>

export default Portfolio