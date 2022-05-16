import bgimg from "../../assets/images/rplace.png";

export default function Index() {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div style={{ position: "fixed", background: `url(${bgimg})`, backgroundRepeat:"no-repeat", backgroundPosition: "50%", backgroundSize: "130%", width: "100%", minHeight:"100%", alignItems: "center", justifyContent: "center" }}>
        <h1 className="grid-item">Welcome to Remix</h1>
      </div>
    </div>
  );
}
