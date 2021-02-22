import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    const { canvasWidth, canvasHeight } = canvas.getBoundingClientRect();
    const draw = (context) => {
      var img = new Image(); // Create new img element
      img.src = "7debaf0c-a396-4a57-a000-b1e418c4cb7c.png"; // Set source path
      context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    };
    //Our draw came here
    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
