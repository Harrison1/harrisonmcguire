const Retro = () =>
    <div className="body">
        <div className="lightning"></div>
        <div className="smoke"></div>
        <div className="static"></div>
        <div className="mountain"></div>

        <div id="floor">
            <div className="floorInner">
                <ul className="horizontal">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>  
                <ul className="vertical">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <style jsx>{`
            #floor {
                width:250%;
                height:50vh;
                position:relative;
                overflow:hidden;  
                -webkit-transform: perspective( 20px );
                -moz-transform: perspective( 20px );
                -ms-transform: perspective( 20px );
                transform: perspective( 20px );
                left:-75%;
                padding-top:266px;
            }

            .floorInner {
                width:100%;
                height:50vh;  
                -webkit-transform: perspective( 28px ) rotateY( 0deg ) rotatex( 3deg);
                -moz-transform: perspective( 28px ) rotateY( 0deg ) rotatex( 3deg);
                -ms-transform: perspective( 28px ) rotateY( 0deg ) rotatex( 3deg);
                transform: perspective( 28px ) rotateY( 0deg ) rotatex( 3deg);
            }

            ul {
                position: absolute;
                top:0px; 
                left:0px;
                list-style-type:none;
                margin:0px;
                padding:0px;
                height:50vh;
                width:100%;
            }

            ul li {
                display: block;
                height:10%;
            }

            ul li:last-child { box-shadow:none; }
            ul.horizontal li  {box-shadow:inset 0px 2px 0px #d358bf; }

            ul.vertical li {
                float: left;
                width:10%;
                box-shadow:inset -2px 0px 0px #d358bf;
                height:50vh;  
                animation: slideleft 6s; 
                animation-iteration-count: infinite;
                animation-timing-function:linear;
            }

            @keyframes slideleft { 
                0%   { 
                    -webkit-transform: translate(0%); 
                    -moz-transform: translate(0%); 
                    -ms-transform: translate(0%); 
                    transform: translate(0%);   
                } 
                100% { 
                    -webkit-transform: translate(100%); 
                    -moz-transform: translate(100%); 
                    -ms-transform: translate(100%); 
                    transform: translate(100%);
                } 
            }

            .mountain:before{
                content:' ';
                background:transparent;
                width:300px;
                height:300px;
                position:absolute;
                top:-100px;
                left:35%;
                border-radius:50%;
                z-index:-1;
                box-shadow: inset 0px 0px 100px 10px rgba(243,107,245,0.3), 0px -29px 90px 0px #f36bf5;
            }

            .mountain{
                height:180px;
                padding-top:30px;
                position:absolute;
                top:28%;
                left:-15%;
                width:115%;
                min-width:1932px;
                background:url(https://s.cdpn.io/21555/mountain_2.svg);
                background-repeat: repeat-x;  
                animation: slowLeft 200s;
                animation-iteration-count: infinite;
                animation-timing-function:linear;
            }

            @keyframes slowLeft { 
                0% { 
                    background-position: 0px 0px;
                } 
                100% { 
                    background-position:1932px 0px;
                } 
            }

            .body {
                height: 50vh;
                background: rgb(41,55,143);
                background: -moz-linear-gradient(-45deg,  rgb(41,55,143) 0%, rgb(61,50,102) 31%, rgb(92,30,79) 67%, rgb(20,3,39) 100%);
                background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgb(41,55,143)), color-stop(31%,rgb(61,50,102)), color-stop(67%,rgb(92,30,79)), color-stop(100%,rgb(20,3,39)));
                background: -webkit-linear-gradient(-45deg,  rgb(41,55,143) 0%,rgb(61,50,102) 31%,rgb(92,30,79) 67%,rgb(20,3,39) 100%);
                background: -o-linear-gradient(-45deg,  rgb(41,55,143) 0%,rgb(61,50,102) 31%,rgb(92,30,79) 67%,rgb(20,3,39) 100%);
                background: -ms-linear-gradient(-45deg,  rgb(41,55,143) 0%,rgb(61,50,102) 31%,rgb(92,30,79) 67%,rgb(20,3,39) 100%);
                background: linear-gradient(135deg,  rgb(41,55,143) 0%,rgb(61,50,102) 31%,rgb(92,30,79) 67%,rgb(20,3,39) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#29378f', endColorstr='#140327',GradientType=1 );
            }

            .smoke {
                position: absolute;
                top: 0;
                left: 0;
                width: 20%;
                height: 20%;  
                background-image: url(https://s.cdpn.io/21555/smoke.gif);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;  
                -webkit-filter:blur(3px) brightness(0.5);
                -webkit-transform-origin: top left;
                -webkit-transform: scale(5);
                opacity:0.3;
            }

            .static{
                z-index:-1;
                position:absolute;
                content:' ';
                width:20%;
                height:20%;
                background-image: url(https://s.cdpn.io/21555/static.gif);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;  
                -webkit-filter: brightness(0.2);
                -webkit-transform-origin: top left;
                -webkit-transform: scale(5);
                opacity:0.15;
            }

            .lightning{
                z-index:1;
                position:absolute;
                width:100%;
                min-height:635px;
                left:5%;
                background:transparent url(https://s.cdpn.io/21555/lightning_1.png) no-repeat;
                animation: flash 7s; 
                animation-iteration-count: infinite;
                animation-timing-function:linear;
            }

            @keyframes flash { 
                0% { opacity:0.0;} 
                2% { opacity:1.0;}   
                3% { opacity:0.5;} 
                4% { opacity:0.2;} 
                10% { opacity:0.0;} 
                100% { opacity:0.0;}
            }
        `}
        </style>
    </div>


export default Retro