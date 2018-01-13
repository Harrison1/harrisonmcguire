const SectionTitleBlue = ({ title }) =>
    <div>
        <h2>{ title }</h2>
        <style jsx>{`
            h2 {
                color: #00bcd4;
                font-size: 4rem;
                text-align: center;
            }

            @media (min-width: 800px) {
                h2 {
                    font-size: 6rem;
                    letter-spacing: 2rem;
                }
            }
        `}</style>
    </div>

export default SectionTitleBlue

