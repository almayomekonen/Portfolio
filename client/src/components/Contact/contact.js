import "./contact.css";
import gitIcon from "../../assets/github.png";
import linkdeinIcon from "../../assets/linkdein.png";
import instagramIcon from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import { useState } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { isEmail, isNotEmpty } from "./Validation";

import Input from "../Input/Input";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mnqknqvk");
  const [isSending, setIsSending] = useState(false);

  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [identifier]: "",
    }));
  };

  const handleInputBlur = (identifier) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [identifier]: validateField(identifier, enteredValues[identifier]),
    }));
  };

  const validateField = (identifier, value) => {
    switch (identifier) {
      case "name":
        return isNotEmpty(value) ? "" : "Please enter your name";
      case "email":
        return isEmail(value) ? "" : "Please enter a valid email";
      case "message":
        return isNotEmpty(value) ? "" : "Please enter a message";
      default:
        return "";
    }
  };

  const handleWaitForm = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      reset();
    }, 7000);
  };

  if (state.succeeded) {
    if (!isSending) {
      handleWaitForm();
    }
    return (
      <>
        <div id="overlay"></div>
        <div className="submission-popup">
          <h2>Thank you for reaching out!</h2>
          <br />
          <p>Your message has been received! I'll reply soon.</p>
          <br />
          <p>
            Meanwhile, explore my portfolio or connect on social media for
            updates.
          </p>
        </div>
      </>
    );
  }

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form
          className="contactForm"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mnqknqvk"
          method="POST"
        >
          <Input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
            required
            autoComplete="off"
            onBlur={() => handleInputBlur("name")}
            onChange={(event) => handleInputChange("name", event.target.value)}
            value={enteredValues.name}
            error={errors.name}
          />
          <Input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
            autoComplete="off"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
            error={errors.email}
          />
          <Input
            textArea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
            required
            autoComplete="off"
            onBlur={() => handleInputBlur("message")}
            onChange={(event) =>
              handleInputChange("message", event.target.value)
            }
            value={enteredValues.message}
            error={errors.message}
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            value="Send"
            type="submit"
            disabled={state.submitting || isSending}
            className="submitBtn"
          >
            Send Form
          </motion.button>

          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/almayo-mekonen-0835942b4/"
            >
              <img src={linkdeinIcon} alt="linkedin" className="link" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/almayomekonen"
            >
              <img src={gitIcon} alt="Github" className="link" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/almayomekonen/"
            >
              <img src={instagramIcon} alt="Instagram" className="link" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100002097524154&locale=he_IL"
            >
              <img src={facebook} alt="facebook" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
