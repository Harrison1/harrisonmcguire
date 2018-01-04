const Headline = ({ name, tagline }) =>
    <div>
        <h1>{ name }</h1>
        <h2>{ tagline }</h2>
        <style jsx>{`
        div {
            align-content: center;
            align-items: center;
            background: rgba(1, 186, 212, 0.7);
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
            margin: 5px;
            text-align: center;
            width: 100%;
        }

        h2 {
            color: white;
            font-size: 2rem;
            margin: 5px;
            text-align: center;
            width: 100%;
        }
        `}</style>
    </div>

export default Headline