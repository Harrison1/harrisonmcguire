import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    this.cardImageHD = null;
  }

  componentDidMount() {
        
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.cardImageHD.setAttribute(
        'style',
        `background-image: url('${this.props.srcLoaded}')`
      );
      this.cardImageHD.classList.add('card-image-fade-in');
    }

  };

  render() {
    return (
        <div>
            <a href={ this.props.link }>
                <div className="card-image-container">
                    <div className="card-image-loaded" ref={imageLoadedElem => this.cardImageHD = imageLoadedElem}>
                        <div className="inner-content">
                            <div className="info">
                                <h3>{ this.props.title }</h3>
                                <p className="description">{ this.props.description }</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-image-preload" style={{ backgroundImage: `url('${this.props.srcPreload}')` }}>
                        <div className="inner-content">
                            <div className="info">
                                <h3>{ this.props.title }</h3>
                                <p className="description">{ this.props.description }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>    
        <style jsx>{`
            .card-image-container {
                position: relative;
                width: 100%;
                height: 400px;
                overflow: hidden;
              }
              
              .card-image-preload {
                position: absolute;
                z-index: 1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-size: cover;
                background-position: 50% 50%;
              }
              
              .card-image-loaded {
                position: absolute;
                z-index: 2;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-size: cover;
                opacity: 0;
                transition: opacity 1s ease;
                background-position: 50% 50%;
              }
              
              .card-image-fade-in {
                opacity: 1;
              }
            p {
                font-size: 1.8rem;
                color: white;
                text-align: center;
            }
            a {
                text-decoration: none;
                color: #1f1f1f;
            }
            .inner-content {                
                align-items: center;
                background: ${ this.props.color };
                display: grid;
                height: 100%;
                justify-content: center;
                padding: 1.5rem;
                width: 100%;
            }
            h3 {
                color: #fff;
                font-size: 3rem
                font-weight: 700;
                line-height: 1.2;
                margin: 0;
                text-align: center;
            }
            a:hover .card-image-loaded {
                opacity: 0.3;
            }
         `}</style>
      </div>
    )
  }

}

export default Card;