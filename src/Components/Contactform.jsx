import Emailicon from "../assets/mail.png"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contactform = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qp9bb7p', 'template_3johrk6', form.current, '-zixrlUnGM3H45s4W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="flex flex-row">
        <img src={Emailicon} alt="" className="w-[30%] h-[30%]"/>
        <div className="ml-10">
        <h1 className="font-caveat text-3xl font-bold mt-3">Fill Our Contact Form</h1>
        <form action="" className="flex flex-row mt-10" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col">
            <h1 className="font-jost text-lg mb-2 font-bold">Name</h1>
        <input type="text" name="name" className="outline-none border-b-2 font-jost text-lg border-black w-96 mr-28 mb-8 pb-4 bg-transparent" placeholder="First up, what should we call you?" required/>
            <h1 className="font-jost text-lg mb-2 font-bold">Email</h1>
        <input type='email' name="email" className="outline-none border-b-2 font-jost text-lg border-black w-96 mr-28 mb-8 pb-4 bg-transparent" placeholder="Great now what's your work email?" required/>
            <h1 className="font-jost text-lg mb-2 font-bold">Phone Number</h1>
        <input type='tel' name="phone_num" className="outline-none border-b-2 font-jost text-lg border-black w-96 mr-28 mb-8 pb-4 bg-transparent" placeholder="and your Phone number" required/>
            <h1 className="font-jost text-lg mb-2 font-bold">Company Name</h1>
        <input type="text" name="company_name" className="outline-none border-b-2 font-jost text-lg border-black w-96 mr-28 mb-8 pb-4 bg-transparent" placeholder="What is your Company name?" required/>
          </div>
          <div className="flex flex-col">
            <h1 className="font-jost text-lg mb-2 font-bold">Company Size</h1>
        <input type="number" name="company_size" className="outline-none border-b-2 font-jost text-lg border-black w-96 mb-8 pb-4 bg-transparent" placeholder="Please enter your current monthly revenue" required/>
            <h1 className="font-jost text-lg mb-2 font-bold">Company Website</h1>
        <input type='text' name="company_website" className="outline-none border-b-2 font-jost text-lg border-black w-96 mb-8 pb-4 bg-transparent" placeholder="Please enter your company's website link" required/>
            <h1 className="font-jost text-lg mb-2 font-bold">Company Funded</h1>
        <input type='text' name="funded" className="outline-none border-b-2 font-jost text-lg border-black w-96 mb-8 pb-4 bg-transparent" placeholder="Is your company funded?" required/>
            <h1 className="font-jost text-lg mb-2 font-bold">Services</h1>
        <input type="text" name="Services" className="outline-none border-b-2 font-jost text-lg border-black w-96 mb-8 pb-4 bg-transparent" placeholder="Last Question, what services are you interested in?" required/>
        <div className="flex flex-row justify-end">

        <button type="submit" className="py-2 px-6 border-2 w-28 border-black rounded-full">Submit</button>
        </div>
          </div>

        </form>
        </div>
    </div>
  )
}

export default Contactform