import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, List, Login, New, Single } from "./pages";




function App() {
  return (
    <div className="App">
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
          <Route path="new" element={<New/>}/>
        </Route>
        {/* Products route with the slash home route */}
        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
      </Route>
      </Routes>
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
