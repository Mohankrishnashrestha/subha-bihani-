
import { useState } from "react";
import "./App.css"
import Content from "./Content";
import Heading from "./Heading"

const header={
  technical:"23x7 Technical Support",
  phoneNo:"01-4435890"
  
}
const navigation={
  title:"Subha Bihani Digital Media Pvt. Ltd",
  home:"Home",
  about:"About Us",
  portfolio:"Portfolio",
  service:"Services",
  contact:"Contact Us",
}

function App() {
  const [content,setContent]=useState("home");

  return (
    <div className="main">
    <Heading header={header} navigation={navigation} setContent={setContent} />
    <Content content={content}/>
    
    </div>

  )
}

export default App