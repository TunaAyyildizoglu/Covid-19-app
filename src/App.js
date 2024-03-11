import { Provider } from "react-redux";
import store from "./Store";
import HeaderAndMap from "./HeaderAndMap";
import CovidStatisticsComponent from "./CovidStatisticsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  
  
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HeaderAndMap />} />
            <Route path="detail" element={<CovidStatisticsComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
