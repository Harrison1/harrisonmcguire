import React from 'react'

class ShowcaseVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight 
        });
    }

    render() {

        let background = null;

        if (this.state.width > 800) {
          background =  <video preload="auto" className="showcase-video" autoPlay loop muted>
                            <source src="https://res.cloudinary.com/dz09rnbhe/video/upload/v1515031992/aerial_mjx8gn.mp4" type="video/mp4" />
                        </video>
        } else {
          background = <div></div>;
        }

        return  (

            <div className="tv">
                { background }
                <style jsx>{`
                    .tv {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 1;
                        width: 100%;
                        height: 75vh;
                        overflow: hidden;
                    }
                
                    .showcase-video {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translateX(-50%) translateY(-50%);
                            transform: translateX(-50%) translateY(-50%);
                            min-width: 100%;
                            min-height: 100% ;
                            width: auto;
                            height: auto;
                            z-index: -1000 ;
                            overflow: hidden;
                    }
                `}</style>
            </div>
        )
    }
}

export default ShowcaseVideo