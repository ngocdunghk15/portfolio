import {Route, Routes} from "react-router-dom";
import HomePage from "../pages";
import AboutPage from "../pages/about";

function AppRouting() {
  return <div>
    <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/about'} element={<AboutPage/>}/>
    </Routes>
  </div>
}

export default AppRouting;
