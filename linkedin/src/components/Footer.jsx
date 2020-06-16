import React, { Component } from 'react'
import "./Footer.css"
import { Container, Row, Col, Form } from "react-bootstrap"
export class Footer extends Component {
  render() {
    return (
      <div className="containers">

          <div className="row mb-4">
              <div className="col-4"><a href="/">About</a></div>
              <div className="col-4"><a href="/">Community Guidelines</a></div>
              <div className="col-4">
                  <select id="privacy">
                    <option>
                      Privacy and Terms
                      </option>
                  </select>
                </div>
              <div className="col-4"><a href="/">Sales Solutions</a></div>
              <div className="col-4"><a href="/">Safety Center</a></div>
              <div className="col-4"><a href="/">Accessibility</a></div>
              <div className="col-4"><a href="/">Careers</a></div>
              <div className="col-4"><a href="/">Ad Choices</a></div>
              <div className="col-4"><a href="/">Mobile</a></div>
              <div className="col-4"><a href="/">Talent Solutions</a></div>
              <div className="col-4"><a href="/">Marketing Solutions</a></div>
              <div className="col-4"><a href="/">Advertising</a></div>
              <div className="col-4"><a href="/">Small Business</a></div>
              <div className="col-4"><a href="/">
                  Questions? Visit our Help Center.
                </a></div>
              <div className="col-4"><a href="/">
                  Manage your account and privacy</a></div>
              <div className="col-4"><a href="/">Go to your Settings.</a>
                </div>
              <div className="col-4">
              </div>

          </div>
          <label className=" ml-2 mr-1">Select Language: </label>
                <select>
                  <option>
                    English (english)
                    </option>
                </select>
          <p className="ml-2">LinkedIn Corporation © 2020</p>

      </div>
    )
  }
}
export default Footer