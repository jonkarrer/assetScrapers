import libmoji from "libmoji";
import combos from "combos";

function App() {
  const maleTraits = libmoji.getTraits("male", "cm");
  const femaleTraits = libmoji.getTraits("female", "cm");
  console.log("Male", maleTraits);
  console.log("Female", femaleTraits);

  return <div className="App"></div>;
}

export default App;
