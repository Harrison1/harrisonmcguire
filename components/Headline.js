const Headline = ({ name, tagline }) => (
    <div>
        <h1>{ name }</h1>
        <h2>{ tagline }</h2>
        <style jsx>{`
        div {
            align-content: center;
            align-items: center;
            background: #1b3740;
            display: flex;
            height: 50vh
            justify-content: center;
            flex-wrap: wrap;
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
)

export default Headline