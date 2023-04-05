import { useState } from "react";
import { EmAuth } from "../../utils/helper";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wrong, setWrong] = useState("");

  const handleSwitch = (e) => {
    const { target } = e;
    const formType = target.name;
    const formValue = target.value;

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

  const formSubmission = (e) => {
    e.preventDefault();

    if (!name) {
      setWrong("please make sure the username is filled out");
      return;
    }
    if (!EmAuth(email)) {
      setWrong("email may not be valid");
      return;
    }
    if (!message) {
      setWrong("please fill in the message box");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    setWrong("");
  };
  return (
    <div>
      <h2 className="text-center">Contact Me</h2>
      <p className="text-center">
        If you would like to contact me, please fill out the form below, and I
        will respond as soon as possible. Have a nice day.
      </p>

      <form className="container">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            className="form-control"
            value={name}
            name="name"
            onChange={handleSwitch}
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            value={email}
            name="email"
            onChange={handleSwitch}
            placeholder="Enter Email"
          />
        </div>
        <div class="form-group">
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
          type="submit"
          className="btn btn-primary mt-4"
          onClick={formSubmission}
        >
          Send
        </button>
      </form>
      <h4 className="error text-center">{wrong}</h4>
    </div>
  );
}
