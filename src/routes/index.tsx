import {Route, Routes} from "react-router-dom";
import HomePage from "../pages";
import AboutPage from "../pages/about";
import AppLayout from "../layouts/AppLayout.tsx";

function AppRouting() {
  return <div>
    <Routes>
      <Route path={''} element={<AppLayout/>}>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/about'} element={<AboutPage/>}/>
      </Route>
    </Routes>
  </div>
}

export default AppRouting;
