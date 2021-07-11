import React from "react";
import "./ContactComponent.css"
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

function ContactComponent(props) {
    return (
        <div>
            <h2 id="contact">Get Connected</h2>
            <div className="mt-4">
                <p>We would love to hear from you!</p>
                <p>For any enquiries and feedback, please get in touch with us via:</p>
            </div>
            <div className="horizontalCenter mt-4">
                <table>
                    <tr>
                        <td>
                            <a href="mailto:linehayat@usm.my" target="_blank">
                                <i className="far fa-envelope socialsIcon"></i>
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="mailto:linehayat@usm.my" target="_blank">
                                <span>linehayat@usm.my</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.facebook.com/linehayat.usm" target="_blank">
                                <i className="fab fa-facebook socialsIcon"></i>
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="https://www.facebook.com/linehayat.usm" target="_blank">
                                <span>/linehayat.usm</span>
                            </a>
                        </td>
                    </tr>
                    <tr style={{width: '100%'}}>
                        <td style={{width: '50%'}}>
                            <a href="https://www.instagram.com/linehayat_usm" target="_blank">
                                <i className="fab fa-instagram socialsIcon"></i>
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="https://www.instagram.com/linehayat_usm" target="_blank">
                                <span>@linehayat_usm</span>
                            </a>
                        </td>
                    </tr>

                </table>
            </div>
            <div className="mt-4">
                <h2 id="contact">Feedback to LineHayat </h2>
                <p>We are delighted to be able to help you in your most challenging time. If you have used our service,</p>
                <p> it would be wonderful to know your experience to provide better services in the
                    future.</p>
                <p>Worry not, as we promise a completely confidential service, your comments would be anonymous.</p>
                <div className="mt-3">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdyPtOfIKj6rVI0eUY9l4j5_ZYR6APHTrT5uLpD7e6zHLYQIQ/viewform?usp=sf_link'
                       target="_blank">
                        <Button variant="primary" className="buttonHome">Feedback Form</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent;
