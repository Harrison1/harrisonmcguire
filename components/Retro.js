const Retro = () =>
    <div className="retro">
        <div className='grid-top'></div>
        <div className='grid-bottom'></div>

        <style jsx>{`
            .retro {
                background: #000;
                position: absolute;
                height: 50vh;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                -webkit-transform-style: preserve-3d;
                        transform-style: preserve-3d;
                -webkit-perspective: 1000px;
                        perspective: 1000px;
                overflow: hidden;
            }

            .grid-top, .grid-bottom {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                background-size: 50px 50px;
            }


            .grid-top {
                background-image: -webkit-gradient(linear, left bottom, left top, color-stop(19%, rgba(0, 0, 0, 0)), color-stop(24%, rgba(184, 1, 179, 0.5)), color-stop(25%, #b900b4), color-stop(26%, #b900b4), color-stop(27%, rgba(184, 1, 179, 0.5)), color-stop(32%, rgba(0, 0, 0, 0)), color-stop(69%, rgba(0, 0, 0, 0)), color-stop(74%, rgba(184, 1, 179, 0.5)), color-stop(75%, #b900b4), color-stop(76%, #b900b4), color-stop(77%, rgba(184, 1, 179, 0.5)), color-stop(82%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0))), -webkit-gradient(linear, left top, right top, color-stop(19%, rgba(0, 0, 0, 0)), color-stop(24%, rgba(184, 1, 179, 0.5)), color-stop(25%, #b900b4), color-stop(26%, #b900b4), color-stop(27%, rgba(184, 1, 179, 0.5)), color-stop(32%, rgba(0, 0, 0, 0)), color-stop(69%, rgba(0, 0, 0, 0)), color-stop(74%, rgba(184, 1, 179, 0.5)), color-stop(75%, #b900b4), color-stop(76%, #b900b4), color-stop(77%, rgba(184, 1, 179, 0.5)), color-stop(82%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));
                background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 19%, rgba(184, 1, 179, 0.5) 24%, #b900b4 25%, #b900b4 26%, rgba(184, 1, 179, 0.5) 27%, rgba(0, 0, 0, 0) 32%, rgba(0, 0, 0, 0) 69%, rgba(184, 1, 179, 0.5) 74%, #b900b4 75%, #b900b4 76%, rgba(184, 1, 179, 0.5) 77%, rgba(0, 0, 0, 0) 82%, rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0) 19%, rgba(184, 1, 179, 0.5) 24%, #b900b4 25%, #b900b4 26%, rgba(184, 1, 179, 0.5) 27%, rgba(0, 0, 0, 0) 32%, rgba(0, 0, 0, 0) 69%, rgba(184, 1, 179, 0.5) 74%, #b900b4 75%, #b900b4 76%, rgba(184, 1, 179, 0.5) 77%, rgba(0, 0, 0, 0) 82%, rgba(0, 0, 0, 0));
                -webkit-transform: rotateX(-80deg) scale(2);
                        transform: rotateX(-80deg) scale(2);
                -webkit-transform-origin: top center;
                        transform-origin: top center;
                -webkit-box-shadow: inset 0px -100px 100px 100px #000;
                        box-shadow: inset 0px -100px 100px 100px #000;
                animation: rad 1s reverse linear infinite;
            }

            .grid-bottom {
                background-image: -webkit-gradient(linear, left bottom, left top, color-stop(19%, rgba(0, 0, 0, 0)), color-stop(24%, rgba(13, 229, 255, 0.5)), color-stop(25%, #0de5ff), color-stop(26%, #0de5ff), color-stop(27%, rgba(13, 229, 255, 0.5)), color-stop(32%, rgba(0, 0, 0, 0)), color-stop(69%, rgba(0, 0, 0, 0)), color-stop(74%, rgba(13, 229, 255, 0.5)), color-stop(75%, #0de5ff), color-stop(76%, #0de5ff), color-stop(77%, rgba(13, 229, 255, 0.5)), color-stop(82%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0))), -webkit-gradient(linear, left top, right top, color-stop(19%, rgba(0, 0, 0, 0)), color-stop(24%, rgba(13, 229, 255, 0.5)), color-stop(25%, #0de5ff), color-stop(26%, #0de5ff), color-stop(27%, rgba(13, 229, 255, 0.5)), color-stop(32%, rgba(0, 0, 0, 0)), color-stop(69%, rgba(0, 0, 0, 0)), color-stop(74%, rgba(13, 229, 255, 0.5)), color-stop(75%, #0de5ff), color-stop(76%, #0de5ff), color-stop(77%, rgba(13, 229, 255, 0.5)), color-stop(82%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));
                background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 19%, rgba(13, 229, 255, 0.5) 24%, #0de5ff 25%, #0de5ff 26%, rgba(13, 229, 255, 0.5) 27%, rgba(0, 0, 0, 0) 32%, rgba(0, 0, 0, 0) 69%, rgba(13, 229, 255, 0.5) 74%, #0de5ff 75%, #0de5ff 76%, rgba(13, 229, 255, 0.5) 77%, rgba(0, 0, 0, 0) 82%, rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0) 19%, rgba(13, 229, 255, 0.5) 24%, #0de5ff 25%, #0de5ff 26%, rgba(13, 229, 255, 0.5) 27%, rgba(0, 0, 0, 0) 32%, rgba(0, 0, 0, 0) 69%, rgba(13, 229, 255, 0.5) 74%, #0de5ff 75%, #0de5ff 76%, rgba(13, 229, 255, 0.5) 77%, rgba(0, 0, 0, 0) 82%, rgba(0, 0, 0, 0));
                -webkit-transform: rotateX(80deg) scale(2);
                        transform: rotateX(80deg) scale(2);
                -webkit-transform-origin: bottom center;
                        transform-origin: bottom center;
                -webkit-box-shadow: inset 0px 100px 100px 100px #000;
                        box-shadow: inset 0px 100px 100px 100px #000;
                -webkit-animation: rad 1s linear infinite;
                        animation: rad 1s linear infinite;
            }

            @keyframes rad { 
                100% { background-position:0px 50px;}
            }
        `}
        </style>
    </div>


export default Retro