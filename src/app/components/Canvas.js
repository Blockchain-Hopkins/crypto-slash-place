import { useEffect, useRef } from "react";

export default function Canvas(props) {
  const { index } = props;
  const canvasRef = useRef(null);

  function getRndColor() {
    var r = (255 * Math.random()) | 0,
      g = (255 * Math.random()) | 0,
      b = (255 * Math.random()) | 0;
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  useEffect(() => {
    let canvas = canvasRef.current;
    canvas.style.width = "50px";
    canvas.style.height = "50px";
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = getRndColor();
    ctx.fillRect(0, 0, 300, 300);
  }, []);

  return (
    <canvas
      onClick={() => {
        console.log(index);
      }}
      ref={canvasRef}
      {...props}
    />
  );
}
