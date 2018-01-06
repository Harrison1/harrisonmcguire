const Headline = ({ name, tagline }) =>
    <div>
        <h1>{ name }</h1>
        <h2>{ tagline }</h2>
        <style jsx>{`
        div {
            align-content: center;
            align-items: center;
            background: rgba(1, 186, 212, 1);
            display: flex;
            height: 75vh
            flex-wrap: wrap;
            justify-content: center;
            position: relative;
            z-index: 10;
        }

        h1 {
            color: white;
            font-size: 4rem;
            line-height: 4rem;
            margin: 5px;
            text-align: center;
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
            div {
                background: rgba(1, 186, 212, 0.7);
            }
            h1 {
                font-size: 6rem;
                line-height: 5rem;
            }
        }
        `}</style>
    </div>

export default Headline