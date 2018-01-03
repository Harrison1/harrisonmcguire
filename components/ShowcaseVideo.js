const ShowcaseVideo = () =>
    <div className="tv">
        <video preload="auto" className="showcase-video" autoPlay loop muted>
            <source src='http://res.cloudinary.com/dz09rnbhe/video/upload/v1514902841/ocean_qp27ct.mp4' type="video/mp4" />
        </video>
        <style jsx>{`
            .tv {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
                height: 50%;
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

export default ShowcaseVideo