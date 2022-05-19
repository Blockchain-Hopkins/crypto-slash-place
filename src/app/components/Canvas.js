import { useEffect, useRef } from "react";

export default function Canvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000000";
    ctx.fillRect(50, 50, 50, 50);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}
