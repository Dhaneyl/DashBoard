import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";
import { Home, List, Login, New, Single } from "./pages";
import './style/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";




function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
      {/* slash home route */}
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        {/* Users route with the slash home route */}
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
        </Route>
        {/* Products route with the slash home route */}
        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
        </Route>
      </Route>
      </Routes>
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
