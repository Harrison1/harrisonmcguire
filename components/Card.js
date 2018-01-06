const Card = ({ link, title, description, background }) =>
    <div>
        <a href={ link }>
            <div className="card">
                <div className="info">
                    <h3>{ title }</h3>
                    <p className="description">{ description }</p>
                </div>
            </div>
        </a>
        <style jsx>{`
            p {
                font-size: 1.8rem;
            }
            a {
                text-decoration: none;
                color: #1f1f1f;
            }
            h3 {
                color: rgba(0, 0, 0, 0.87);
                font-size: 3rem
                font-weight: inherit;
                line-height: 1.2;
                margin: 0;
                padding: 2.5rem 2rem;
            }
            .card {
                border-radius: 5px;
                margin: 0 auto;
                width: 100%;
                min-height: 400px;
                box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
                    0px 5px 8px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
                overflow: hidden;
                background-image: url(${ background });
                background-size: cover;
                background-position: 50% 50%;
            }
            .info {
                position: relative;
                width: 100%;
                min-height: 400px;
                background-color: rgba(255, 255, 255, 0.94);
                transform: translateY(100%)
                translateY(-88px)
                translateZ(0);
                transition: transform 0.3s ease-out;
            }
            .card:hover .info,
            .card:hover .info:before {
                transform: translateY(50%) translateZ(0);
            }
            .description {
                margin: 0;
                padding: 0 24px 24px;
                font-size: 18px;
                line-height: 1.5;
            }
        `}</style>
    </div>

export default Card