import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useForm } from "react-hook-form";
const Contact = () => {
  const { handleSubmit} = useForm();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    
    e.preventDefault();


    emailjs
    .sendForm(
      "service_hwel9vg",
      "template_3aonljp",
      form.current,
      "bJAdLILHKyUj6LLtP"
    )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form px-8 pt-8" id='contact'>
      <div className="w-full flex flex-col md:space-x-4 md:flex-row md:justify-between">
        <div className="w-full md:w-1/3 flex flex-col pb-4
        ">
          <div style={{ color: darkMode ? "white" : "" }} className="contact-title">Contact me</div>
          <span className="text-sm text-gray-500">
            I am always looking for an opportunity to learn and grow as an individual and also as an proffessional.
          </span>


        </div>
        <div className="w-full md:w-2/3 flex flex-col md:mt-8 relative">

          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="w-full flex flex-col align-center">
            <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
              <input type="text" name="name" required
              className="w-full border border-yellow-500 rounded text-sm outline-none h-8 px-3 text-black" placeholder="Name" />
            
              </div>
              <input type="email" name="reply_to" required className="w-full border border-yellow-500 rounded text-sm outline-none h-8 px-3 text-black" placeholder="Email" />

            </div>
            <textarea name="message" required className="w-full border border-yellow-500 rounded text-sm outline-none h-16 px-3 text-black" placeholder="Message" />
            <div className="mt-4 flex justify-end">
              <input type="submit" value="Send" required className="cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-12 py-2.5 text-center mr-2 mb-2 " />

            </div>

            <span>{done && "Thanks for Contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "rgb(238 210 255)" }}
            ></div>
          </form>



        </div>
      </div>

    </div>


    // <div className="contact-form" id="contact">
    //   {/* left side copy and paste from work section */}
    //   <div className="w-left">
    //     <div className="awesome">
    //       {/* darkMode */}
    //       <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
    //       <span>Contact me</span>
    //       <div
    //         className="blur s-blur1"
    //         style={{ background: "#ABF1FF94" }}
    //       ></div>
    //     </div>
    //   </div>
    //   {/* right side form */}
    //   <div className="c-right">
    //     <form ref={form} onSubmit={sendEmail}>
    //       <input type="text" name="name" className="user"  placeholder="Name"/>
    //       <input type="email" name="from_name" className="user" placeholder="Email"/>
    //       <textarea name="message" className="user" placeholder="Message"/>
    //       <input type="submit" value="Send" className="button"/>
    //       <span>{done && "Thanks for Contacting me"}</span>
    //       <div
    //         className="blur c-blur1"
    //         style={{ background: "rgb(238 210 255)" }}
    //       ></div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Contact;
