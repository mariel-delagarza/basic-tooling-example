import { render } from "react-dom";
import Dog from "./Dog";

const App = () => {
  return (
    <div>
      <p>Hello I am a dog</p>
      <Dog name="Waffles" breed="Shih Tzu" gender="boy" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
