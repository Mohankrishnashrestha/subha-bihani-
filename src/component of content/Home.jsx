/* eslint-disable react/prop-types */
import "./home.css"
function Home({start}) {
const {name, heading, paragraph, button}=start;
  return (
    <div>
        <div className="start">
        <div>
            <div>{name}</div>
            <div>{heading}</div>
            <div><p>{paragraph}</p></div>
            <div><button>{button}</button></div>
        </div>
        </div>
        <div>hello again</div>
    </div>
  )
}

export default Home