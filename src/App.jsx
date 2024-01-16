import ClockHeading from "./componrnt/ClockHeading";
import ClockSlogan from "./componrnt/ClockSlogan";
import CurrentTime from "./componrnt/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
