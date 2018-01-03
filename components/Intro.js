const birthday = new Date('June 30, 1987')

const calculateAge = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const Intro = () => 
    <div className="wrapper">

        <div className='one'>
            <h3>Hello Galaxy</h3>
            <p>Hi, I'm Harrison McGuire and I am a web and game developer. My mission is to enrich the user experience with attention to detail and beautiful design. I excel in making modern, performant apps. I dedicate most of my time to JavaScript and Unreal Engine 4.</p>
        </div>

        <img src="https://res.cloudinary.com/dz09rnbhe/image/upload/v1514982221/harrison-mcguire_uvgv5x.jpg" />

        <div className='three'>
            <h3>Personal Info</h3>
            <p>Name: Harrison McGuire</p>
            <p>Age: {calculateAge(birthday)}</p>
            <p>Email: <a href='mailto:harrison@severallevels.io'>harrison@severallevels.io</a></p>
            <p>Location: South Florida</p>
        </div>

        <style jsx>{`
            .wrapper {
                display: grid;
                grid-template-rows: auto;
                grid-template-areas: 
                    "one" 
                    "two" 
                    "three";
                grid-row-gap: 2rem;
                margin: auto;
                max-width: 1200px;
                padding: 15px;
            }
            p {
                font-size: 1.8rem;
            }
            .one {
                grid-area: one;
            }
            img {
                grid-area: two;
                border-radius: 10px;
                border: 8px solid white;
                box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
                width: 100%;
            }
            .three {
                grid-area: three;
            }
            h3 {
                color: #00bcd4;
                font-size: 2.4rem;
                font-weight: 600;
                margin-bottom: 2rem;
            }
            @media (min-width: 767px) {
                .wrapper {
                    grid-template-areas:
                    "one one" 
                    "two three";
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
            }
            @media (min-width: 992px) {
                .wrapper {
                    grid-template-areas:"one two three";
                    grid-template-columns: 1fr 1.5fr 1fr;
                    grid-column-gap: 5rem;
                    grid-row-gap: 2rem;
                }
            }
        `}</style>
    </div>

export default Intro