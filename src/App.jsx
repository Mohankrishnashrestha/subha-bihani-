
import "./App.css"
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

  return (
    <div className="main">
    <Heading header={header} navigation={navigation} />
    
    </div>

  )
}

export default App