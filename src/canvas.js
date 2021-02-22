import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    let animationFrameId;

    const { width, height, ...rest } = canvas.getBoundingClientRect();

    const draw = (context) => {
      var img = new Image(); // Create new img element
      img.src = "7debaf0c-a396-4a57-a000-b1e418c4cb7c.png"; // Set source path
      context.drawImage(img, width / 4, height / 4, width / 2, height / 2);
      // context.drawImage(img, 0, 0);

      let path = new Path2D();

      path.moveTo(10, 10);
      path.lineTo(10, 130);
      path.lineTo(270, 130);
      path.lineTo(270, 10);
      path.lineTo(10, 10);

      context.beginPath();
      context.strokeStyle = "green";
      context.moveTo(30, 96);
      context.lineTo(65, 97);
      context.lineTo(10, 76);
      context.lineTo(70, 55);

      context.stroke();
      context.strokeStyle = "red";
      context.stroke(path);
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

  return (
    <div>
      <canvas ref={canvasRef} {...props} />
    </div>
  );
};

export default Canvas;
