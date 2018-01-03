const IntroText = () => 
    <div className="wrapper">
        <p className='left'>Hi, I'm Harrison McGuire and I am a web and game developer. My mission is to enrich the user experience with attention to detail and beautiful design. I excel in making modern, performant apps. I dedicate most of my time to JavaScript and Unreal Engine 4.</p>
        <img src="https://res.cloudinary.com/dz09rnbhe/image/upload/v1514982221/harrison-mcguire_uvgv5x.jpg" className='middle' />
        <p className='right'>you</p>
        <style jsx>{`
            .wrapper {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas: 
                    "left" 
                    "middle" 
                    "right";
                margin: auto;
                max-width: 1200px;
                padding: 15px;
            }
            .left {
                grid-area: left;
                font-size: 1.9rem;
            }
            .right {
                grid-area: right;
                font-size: 1.9rem;
            }
            img {
                grid-area: middle;
                border-radius: 10px;
                border: 8px solid white;
                box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
                width: 100%;
            }
            @media (min-width: 767px) {
                .wrapper {
                  grid-template-columns: 1fr 3fr;
                  grid-template-areas:"left middle right";
                  grid-template-columns: 1fr 1.5fr 1fr;
                  grid-column-gap: 5rem;
                  grid-row-gap: 2rem;
                }
            }
        `}</style>
    </div>

export default IntroText