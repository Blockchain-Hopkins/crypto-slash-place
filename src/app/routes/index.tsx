import bgimg from "../../assets/images/rplace.png";
import { useRef } from "react";
import Canvas from "../components/Canvas"; 

export default function Index() {
  var rows = [];

  var numrows = 100;
  for (var i = 0; i < numrows; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<Canvas key={i} />);
  }
  return <tbody>{rows}</tbody>;
}
