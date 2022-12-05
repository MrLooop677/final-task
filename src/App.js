import Nav from "./component/Nav";
import {Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import View from "./pages/View";
import AddProduct from "./pages/AddProduct";
import Edit from "./pages/Edit";
import LogIn from "./pages/LogIn";
import { useSelector } from "react-redux";
import {Registered, selectUser } from "./Redux/userSlice";
import Register from "./pages/Register";

function App() {
  const user=useSelector(selectUser)
  const isRegistered=useSelector(Registered)
  console.log(isRegistered);
  return (
    <div className="App">
      {user?<Nav />:""}
      <div className="row">

        <div className="col-12">
          {user?
          <Routes>
          {/* makes nested path*/}
          <Route path="/">
            <Route index element={<Products />} />
            <Route path="signup" element={<Register />} />
            <Route path=":productId" element={<View />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="edit/:productId" element={<Edit />} />
          </Route>
        </Routes>
          :isRegistered?<Register/>:<LogIn/>}
        </div>
      </div>
    </div>
  );
}

export default App;
