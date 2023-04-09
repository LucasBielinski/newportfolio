// imports useState from react
import { useState } from "react";
// imports my regex funtion
import { EmAuth } from "../utils/helper";
// imports stylesheet
import "../components/styles/contact.css";
// renders functionality for the contact page and the contact page itself
export default function Contact() {
  // sets default name to none
  const [name, setName] = useState("");
  // stes default email to none
  const [email, setEmail] = useState("");
  // sets default message to none
  const [message, setMessage] = useState("");
  // sets default error msg to none
  const [wrong, setWrong] = useState("");
  // sets button text to send
  const [send, setSend] = useState("send");
  // handles form switch
  const handleSwitch = (e) => {
    const { target } = e;
    const formType = target.name;
    const formValue = target.value;
    // if form type matches name of current target, set value to form value
    if (formType === "name") {
      setName(formValue);
    }
    if (formType === "email") {
      setEmail(formValue);
    }
    if (formType === "message") {
      setMessage(formValue);
    }
  };
  // sets rules for when the form is submitted
  const formSubmission = (e) => {
    e.preventDefault();
    // if name field is empty, set error msg
    if (!name) {
      setWrong("please make sure the username is filled out");
      return;
    }
    // if email fails regex, set error msg
    if (!EmAuth(email)) {
      setWrong("email may not be valid, use lowercase");
      return;
    }
    // if no msg fill in msg box
    if (!message) {
      setWrong("please fill in the message box");
      return;
    }
    // if success change values
    setName("");
    setEmail("");
    setMessage("");
    setWrong("");
    setSend("SENT!");
  };
  return (
    // renders contact page
    <div className="contact">
      <h2 className="text-center">Contact Me</h2>
      <p className="text-center">
        If you would like to contact me, please fill out the form below, and I
        will respond as soon as possible. Have a nice day.
      </p>

      <form className="container">
        <div class="form-group">
          <label className="name" for="name">
            Name
          </label>
          <input
            // sets type
            type="name"
            className="form-control"
            // sets value
            value={name}
            // sets name
            name="name"
            // if changed calls handle switch button
            onChange={handleSwitch}
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label className="email" for="email">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            value={email}
            name="email"
            onChange={handleSwitch}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea
            className="form-control"
            value={message}
            name="message"
            onChange={handleSwitch}
            type="message"
            placeholder="please leave a message"
            rows="3"
          ></textarea>
        </div>
        <button
          // when button clicked call form submission function
          type="submit"
          className="btn btn-primary mt-4"
          onClick={formSubmission}
        >
          {send}
        </button>
      </form>
      <h4 className="error text-center">{wrong}</h4>
    </div>
  );
}
