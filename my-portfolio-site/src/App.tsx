import type { JSX } from "react";
import CraftForSale from "./Components/CraftForSale";
import WeatherItemDetail from "./Components/weatherDetail";
import WeatherItemMain from "./Components/weatherItemMain";

function App(): JSX.Element {
  return (<>
    <WeatherItemDetail/>
    <WeatherItemMain/>
    </>
  )
};

export default App;
