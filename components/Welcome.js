const Welcome = () =>
    <div className="welcome">
        <h2><span>Hi, I'm </span>Harrison McGuire</h2>
        <hr />
        <style jsx>{`
            .welcome {
                padding: 2rem 15px 0 15px;
                margin: auto;
                max-width: 1200px;
                width: 100%;
            }
            h2 {
                color: #00bcd4
                font-size: 4rem;
                text-align: center;
            }
            span {
                color: #34282C;
            }
        `}</style>
    </div>

export default Welcome