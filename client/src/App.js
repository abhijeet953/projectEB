import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import Userpage from "./components/Userpage/Userpage";
import LogIn from "./components/LogIn/LogIn.jsx";
import Write from "./components/Write/Write.jsx";
import Posts from "./components/Userpage/assets/Posts/Posts";
import { Context, ContextProvider } from "./components/context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContextProvider><Home /></ContextProvider>} />
      </Routes>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      <Routes>
        <Route path="/Write" element={<Write />} />
      </Routes>
      <Routes>
        <Route path="/posts" element={<Posts />} />
      </Routes>
      
      {/* {!user ? <LogIn/> : <Userpage/>} */}
        <Routes>
        {/* <Route path="/Userpage">{user ? <LogIn /> : <Userpage />}</Route> */}
        <Route path="/Userpage" element={<Userpage />} />
      </Routes>
     
    </div>
  );
}

export default App;
// const { user } = useContext(Context);
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* <Route path="/SignIn" element={<SignIn />} /> */}
//         <Route path="/SignIn">{user ? <Home /> : <SignIn />}</Route>

//         {/* <Route path="/Userpage" element={<Userpage />} /> */}
//         <Route path="/Userpage">{user ? <Home /> : <Userpage />}</Route>

//         {/* <Route path="/LogIn" element={<LogIn />} /> */}
//         <Route path="/LogIn">{user ? <Home /> : <LogIn />}</Route>

//         {/* <Route path="/posts" element={<Posts />} /> */}
//         <Route path="/Posts">{user ? <Home /> : <Posts />}</Route>

//       </Routes>
//     </div>
