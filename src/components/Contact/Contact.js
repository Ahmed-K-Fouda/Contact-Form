import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setResult("Sending....");

    emailjs
      .sendForm(
        "service_grwxavq",
        "template_pasxs5n",
        event.target,
        "WWQ5sAJfyl71dvBhA"
      )
      .then(
        (response) => {
          setResult("Form Submitted Successfully");
          toast.success("Message sent successfully!");
          event.target.reset();
        },
        (error) => {
          console.log("Error", error);
          setResult("Failed to send message");
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact__container">
      <div className="overlay"></div>
      <div className="contact">
        <div className="top__page">
          <p>Contact Us</p>
          <p>6th Jun 2024</p>
        </div>

        <div className="contact__main">
          <div className="contact__left">
            <div className="visit">
              <h4>Visit Us</h4>
              <sm>Here is the address of organization</sm>
            </div>
            <div className="leave__email">
              <h4>Leave us an email</h4>
              <sm>mail to : seffuture@gmail.com</sm>
            </div>
            <div className="follow">
              <h4>Follow us on social media</h4>
              <div className="social__icon">
                <a href="https://www.facebook.com/profile.php?id=100088343374799">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__right">
            <div className="right__head">
              <h4>GET IN TOUCH</h4>
              <p>We'd love here from you</p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="input__name">
                <div className="input__first__name">
                  <label>First Name</label>
                  <input type="text" required name="name" />
                </div>
                <div className="input__last__name">
                  <label>Last Name</label>
                  <input type="text" required name="last_name" />
                </div>
              </div>

              <div className="email__phone__input">
                <div className="email">
                  <label>Email</label>
                  <input type="email" required name="email" />
                </div>
                <div className="phone">
                  <label>Phone number</label>
                  <input type="text" required name="phone_num" />
                </div>
              </div>

              <div className="text__area">
                <label>Message</label>
                <textarea required rows={5} cols={25} name="message" />
              </div>
              <div className="submit__form">
                <button type="submit">SEND</button>
              </div>
            </form>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                className: "",
                style: {
                  border: "1px solid #713200",
                  padding: "16px",
                  color: "#713200",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
