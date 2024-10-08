import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"
import { Landing } from "./pages/Landing"
import { Bookmark } from "./pages/Bookmark"
import { Myblogs } from "./pages/Myblogs"
import ForgetPassword from "./pages/ForgetPassword"
import Verify from "./pages/Verify"
import NewPassword from "./pages/NewPassword"


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/bookmark"   element={<Bookmark/>} />
    <Route path="/"   element={<Landing/>} />
    <Route path="/signup"   element={<Signup/>} />
    <Route path="/signin"   element={<Signin/>} />
    <Route path="/blog/:id"   element={<Blog/>} />
    <Route path="/blogs"   element={<Blogs/>} />
    <Route path="/publish"   element={<Publish/>} />
    <Route path="/myblogs"   element={<Myblogs/>} />
    <Route path="/forgotpassword"   element={<ForgetPassword/>} />
    <Route path="/verify"   element={<Verify/>} />
    <Route path="/resetpassword"   element={<NewPassword/>} />
    
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
