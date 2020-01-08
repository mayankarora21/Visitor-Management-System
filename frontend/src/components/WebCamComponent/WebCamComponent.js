import React from "react";
import Webcam from "react-webcam";
 
const  WebCamComponent =()=> {
    
        const videoConstraints = {
          width: 250,
          height: 250,
          facingMode: "user"
        };
        const webcamRef = React.useRef(null);
 
        const capture = React.useCallback(
            () => {
              const imageSrc = webcamRef.current.getScreenshot();
                console.log('image src',imageSrc);
            },
            [webcamRef]
        );

        return(
            <React.Fragment>
              <Webcam
                audio={false}
                height={250}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
              />
              <button onClick={capture}>Capture photo</button>
            </React.Fragment>
          );
    
}
export default WebCamComponent;