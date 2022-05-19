import bgimg from "../../assets/images/rplace.png";
export default function Index() {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", fontFamily: "system-ui, sans-serif", lineHeight: "1.4",color: "black" }}>
        <h1 className="grid-item">Welcome to Remix</h1>
        <canvas id="tutorial" width="10" height="10" style = {{color: "black",border: "1px solid black"}}></canvas>
      </div>
  );
}
