import Heading from "../Components/Heading"
import Subheading from "../Components/Subheading"
import Element from "../Components/Element"
import Icon from "../Components/Icon"
import Email from "../Components/Email"
import Contactform from "../Components/Contactform"
const Contact = () => {
  return (
    <div className="flex flex-row justify-start mt-10 pb-40">
      <div className="absolute">
        <Element/>
      </div>
      <div className="flex flex-col w-full">
        <div>
        <Heading/>
        <Subheading/>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col ml-44 mt-20">
            <Email/>
            <Contactform/>
          </div>
          {/* <div>
            <Icon/>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Contact