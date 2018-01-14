const LetterHeader = () =>
    <div className="body">
        <h1>Harrison McGuire</h1>
        <h2></h2>
        <style jsx>{`
            @font-face {
                font-family: 'Decovar Regular24';
                src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/Decovar-VF.ttf");
            }

                        
            h1 {
                margin: 0;
                font-size: 6rem;
                font-family: "Decovar Regular24";
                color: white;
                font-variation-settings: 'SSTR' 1000;
                -webkit-animation: loadin 6s 0.5 linear forwards;
                        animation: loadin 6s 0.5 linear forwards;
            }

            @keyframes loadin { 
                0%   { 
                    font-variation-settings: 'SSTR' 1000;  
                } 
                50% { 
                    font-variation-settings: 'SSTR' 0; 
                } 
            }

            div {
                background: #00bcd4;
                overflow: hidden;
                height: 50vh;
            }
            
            h1 {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                    -ms-flex-align: center;
                        align-items: center;
                -webkit-box-pack: center;
                    -ms-flex-pack: center;
                        justify-content: center;
                width: 100%;
                height: 100%;
                text-align: center;
                -webkit-transform: translateZ(0);
                        transform: translateZ(0);
                -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
              }
        `}
        </style>
    </div>

export default LetterHeader