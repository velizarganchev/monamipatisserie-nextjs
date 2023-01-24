import { Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <h3 className="text-center">Contact</h3>
      <Form method="POST">
        <div className="row flex-center">
          <div className="sm-5">
            <div className="form-group margin-none">
              <label htmlFor="fullName">Full Name</label>
              <input className="input-block" type="text" id="fullName" placeholder="John D" />
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="sm-5">
            <div className="form-group margin-none">
              <label htmlFor="email">Email</label>
              <input className="input-block" type="text" id="email" placeholder="my@email" />
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="sm-5">
            <div className="form-group margin-none">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input className="input-block" type="text" id="phoneNumber" placeholder="+35912323233" />
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="sm-5">
            <div className="form-group margin-none">
              <label htmlFor="message">Message</label>
              <textarea className="input-block" id="message" placeholder="My message"></textarea>
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="sm-3">
            <button className="btn-block btn-danger">Send</button>
          </div>
        </div>
      </Form>
    </div>
  )
}
