import Canvas from "../components/Canvas";
import "../styles/index.styles.css";

export default function Index() {
  var rows = [];

  var numrows = 100;
  for (var i = 0; i < numrows; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Canvas key={i} index={i} />);
  }
  return (
    <>
      <div className="canvasContent">{...rows}</div>
      <div className="colorSelection"></div>
    </>
  );
}
