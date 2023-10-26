import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InfoProvider } from "./context/InfoContext";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Homepage from "./pages/Homepage/Homepage";
import CategoryContent from "./pages/Dashboard/CategoryContent";

function App() {

  return (
    <BrowserRouter>
    <InfoProvider>
    <Routes>
      <Route path="/"  element={<SignIn />}/>
      <Route path="/signUp"  element={<SignUp />}/>
      <Route path="/homepage"  element={<Homepage />}>
      <Route path="/homepage/:category"  element={<CategoryContent />}/>
      </Route>
    </Routes>
    </InfoProvider>
    </BrowserRouter>
    )
}

export default App;
