import SectionTitleBlue from './SectionTitleBlue'

const Education = () =>
    <div className="education">
        <SectionTitleBlue title="Education" />

        <div className="wrapper">
            <a href="https://www.scu.edu/">
                <div className="one">
                    <div className="santa-clara">
                        <img src="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515204067/sc-broncos-logo_nrxuvy.png" className="sc" />
                        <h3>Santa Clara University</h3>
                        <p>BS Finance | 2006 - 2010</p>
                    </div>
                </div>
            </a>
            <a href="https://welcome.miami.edu/">
                <div className="two">
                    <div className="miami">
                        <img src="https://res.cloudinary.com/dz09rnbhe/image/upload/v1515204067/miami-hurricanse-logo_x6fdir.png" className="mi" />
                        <h3>University of Miami</h3>
                        <p>MBA | 2013 - 2015</p>
                    </div>
                </div>
            </a>
        </div>

        <style jsx>{`
            .education {
                padding: 5rem 0px;
            }
            .wrapper {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas: 
                    "one" 
                    "two"; 
                grid-row-gap: 0rem;
                margin: auto;
                padding: 15px 0px;
                width: 100%;
            }
            a {
                overflow: hidden;
                text-decoration: none;
            }
            .one {
                grid-area: one;
                background-image: url(https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515198644/santa-clara-university_bzsrsx.jpg);
                background-position: 50% 50%;
                background-repeat: no-repeat;
                background-size: 244%;
                height: 400px;
                transition: all 2s ease;
                -moz-transition: all 2s ease;
                -ms-transition: all 2s ease;
                -o-transition: all 2s ease;
                -webkit-transition: all 2s ease;
            }
            .two {
                grid-area: two;
                background-image: url(https://res.cloudinary.com/dz09rnbhe/image/upload/w_1000/v1515198644/university-of-miami_rtjh3i.jpg);
                background-position: 50% 50%;
                background-repeat: no-repeat;
                background-size: 244%;
                height: 400px;
                transition: all 2s ease;
                -moz-transition: all 2s ease;
                -ms-transition: all 2s ease;
                -o-transition: all 2s ease;
                -webkit-transition: all 2s ease;
            }
            .santa-clara {
                background-color: rgba(158,0,30,0.6);
                width: 100%;
                height: 100%;
                align-content: center;
                align-items: center;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .miami {
                background-color: rgba(0,93,58,0.6);
                width: 100%;
                height: 100%;
                align-content: center;
                align-items: center;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .one:hover, .two:hover {
                background-size: 200%;
            }
            h3, p {
                color: white;
                text-align: center;
                width: 100%;
            }
            h3 {
                font-size: 3rem;
            }
            p {
                font-size: 2rem;
            }
            img {
                margin: auto;
            }
            .sc {
                width: 150px;
            }
            .mi {
                width: 100px;
            }
            @media (min-width: 800px) {
                .wrapper {
                    grid-template-areas:
                        "one two";
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 0;
                    grid-row-gap: 2rem;
                }
                .one, .two {
                    background-size: 180%;
                }
                .one:hover, .two:hover {
                    background-size: 200%;
                }
            }
        `}</style>
    </div>

export default Education