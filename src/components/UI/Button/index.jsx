import "./style.scss"
import { useEffect, useState } from "react"
import Luna from "../../../assets/icons/luna.png"

function DarkToLight() {
  const [theme, setTheme] = useState(false);



  const handleClick = () => { 
    setTheme(!theme)
  }
  
  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  },[theme])

  return (
   
    <div>
      <button onClick={handleClick} className=" text-[24px]">{theme ? "🌛" : "☀️"}</button>
    </div>
  )
}
export default DarkToLight;