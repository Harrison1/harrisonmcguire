const Headline = ({ name, tagline }) =>
    <div className="hbg-container">
        <div className="hbg">
            <h1>{ name }</h1>
            <h2>{ tagline }</h2>
        </div>
        <style jsx>{`
            .hbg-container {
                align-content: center;
                align-items: center;
                display: flex;
                height: 50vh
                flex-wrap: wrap;
                justify-content: center;
                position: relative;
                z-index: 10;
                background: linear-gradient(253deg, #639, #1797d2, #01bad4, #000);
                background-size: 300% 300%;
                -webkit-animation: Background 25s ease infinite;
                -moz-animation: Background 25s ease infinite;
                animation: Background 25s ease infinite;
            }

            @keyframes Background {
                0% {
                background-position: 0% 50%;
                }
                50% {
                background-position: 100% 50%;
                }
                100% {
                background-position: 0% 50%;
                }
            }

            .hbg {
                background: url(https://res.cloudinary.com/dz09rnbhe/image/upload/v1515206115/bg-lines_vurdkp.png);
                background-size: cover;
                background-position: center;
                width: 100%;
                height: 100%;
                display: -webkit-flex;
                display: flex;
                -webkit-flex-direction: column                
                flex-direction: column;
                -webkit-align-items: center;
                align-items: center;
                -webkit-justify-content: center;
                justify-content: center;
                text-align: center;
            }

            h1 {
                color: white;
                font-size: 4rem;
                line-height: 4rem;
                margin: 5px;
                text-align: center;
                text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
                width: 100%;
            }

            h2 {
                color: white;
                font-size: 2rem;
                font-weight: 500;
                margin: 5px;
                text-align: center;
                width: 100%;
            }
            @media (min-width: 800px) {
                h1 {
                    font-size: 6rem;
                    line-height: 5rem;
                }
            }
        `}</style>
    </div>

export default Headline