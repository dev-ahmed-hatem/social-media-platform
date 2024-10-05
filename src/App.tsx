import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./Components/Profile/Sidebar";
import Account from "./Components/Profile/Account";
import Posts from "./Components/Profile/Posts";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";


const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login/>} />
    //     <Route path="/signup" element={<SignUp />} />
    //   </Routes>
    // </Router>

    <Router>
      <div className="flex">
        <Sidebar/>
        <div className="w-3/4 p-8">
          <Routes>
            {/* Add a default route */}
            <Route path="/" element={<Navigate to="/account" />} />
            <Route path="/account" element={<Account/>} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
