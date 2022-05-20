import { useEffect, useRef } from "react";

export default function Canvas(props) {
  const canvasRef = useRef(null);
  function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
  useEffect(() => {


    let canvas = canvasRef.current;
    canvas.style.position = "relative";
    canvas.style.right = "0px";
    canvas.style.top="-3000px";
    canvas.style.width = "100px";
    canvas.style.height = "100px";
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = getRndColor();
    ctx.fillRect(0,0, 300, 300);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}
