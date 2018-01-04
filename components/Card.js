const Card = ({ link, title, description, background }) =>
    <div>
        <a href={ link }>
            <div className="card">
                <div className="info">
                    <h3 className="title">{ title }</h3>
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
                margin-bottom: 0.5em;
                font-weight: inherit;
                line-height: 1.2;
                color: #1c5b72;
                font-size: 2.618em
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
                background-color: #fff;
                transform: translateY(100%)
                translateY(-88px)
                translateZ(0);
                transition: transform 0.5s ease-out;
            }
            .info:before {
                z-index: -1;
                display: block;
                position: absolute;
                content: ' ';
                width: 100%;
                height: 100%;
                overflow: hidden;
                background-image: url(${ background });
                filter: blur(10px);
                background-size: cover;
                background-position: 50% 50%;
                opacity: 0.25;
                transform: translateY(-100%)
                    translateY(88px)
                    translateZ(0);
                transition: transform 0.5s ease-out;
            }
            .card:hover .info,
            .card:hover .info:before {
                transform: translateY(0) translateZ(0);
            }
            .title {
                margin: 0;
                padding: 24px;
                font-size: 40px;
                line-height: 1;
                color: rgba(0, 0, 0, 0.87);
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