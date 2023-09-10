import Emailicon from "../assets/mail.png"
import { Link } from "react-router-dom"
const Email = () => {
  return (
    <div className="flex flex-row mb-16">
        <img src={Emailicon} alt="" className="w-[13%] h-[13%]"/>
        <div className="ml-10">
            <h1 className="font-caveat text-3xl font-bold mt-2 mb-4">Email</h1>
            <Link
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:saransh@markitup.in";
                e.preventDefault();
            }}
        >
                <h2 className="opacity-50 font-medium mb-1">saransh@markitup.in</h2>
                </Link>
                <Link
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:ishan@markitup.in";
                e.preventDefault();
            }}
        >

            <h2 className="opacity-50 font-medium">ishan@markitup.in</h2>
        </Link>
        </div>
    </div>
  )
}

export default Email