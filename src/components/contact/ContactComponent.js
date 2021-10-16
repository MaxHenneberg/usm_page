import React from "react";
import "./ContactComponent.css"
import Button from "react-bootstrap/Button";
import paperPlane from "../../contrib/paperPlane.svg"
import fbIcon from "../../contrib/fbIcon.svg";
import emailIcon from "../../contrib/emailIcon.svg";
import linkedInIcon from "../../contrib/linkedInIcon.svg";
import igIcon from "../../contrib/igIcon.svg";

function ContactComponent(props) {
    return (
        <div>
            <img src={paperPlane} width="70%" height="70%"/>
            <h1 id="contact">Get Connected</h1>
            <div className="mt-4">
                <p>We would love to hear from you!</p>
                <p>For any enquiries and feedback, please get in touch with us via:</p>
            </div>
            <div className="horizontalCenter mt-4">
                <table>
                    <tr style={{width: '100%'}}>
                        <td style={{width: '50%'}}>
                            <a href="https://www.instagram.com/linehayat_usm" target="_blank">
                                <img className="socialsIcon" src={igIcon}/>
                                {/*<i className="fab fa-instagram socialsIcon"></i>*/}
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="https://www.instagram.com/linehayat_usm" target="_blank">
                                <p>@linehayat_usm</p>
                            </a>
                        </td>
                    </tr>
                    <tr style={{width: '100%'}}>
                        <td style={{width: '50%'}}>
                            <a href="https://www.linkedin.com/company/linehayatusm/" target="_blank">
                                <img className="socialsIcon" src={linkedInIcon}/>
                                {/*<i className="fab fa-linkedin socialsIcon"></i>*/}
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="https://www.linkedin.com/company/linehayatusm/" target="_blank">
                                <p>/linehayatusm</p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.facebook.com/linehayat.usm" target="_blank">
                                <img className="socialsIcon" src={fbIcon}/>
                                {/*<i className="fab fa-facebook socialsIcon"></i>*/}
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="https://www.facebook.com/linehayat.usm" target="_blank">
                                <p>/linehayat.usm</p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="mailto:linehayat@usm.my" target="_blank">
                                <img className="socialsIcon" src={emailIcon}/>
                                {/*<i className="far fa-envelope socialsIcon"></i>*/}
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="mailto:linehayat@usm.my" target="_blank">
                                <p>linehayat@usm.my</p>
                            </a>
                        </td>
                    </tr>

                </table>
            </div>
            <div className="mt-5 pb-4">
                <h1 id="contact">Feedback to LineHayat </h1>
                <p>We are delighted to be able to help you in your most challenging time. If you have used our service,</p>
                <p> it would be wonderful to know your experience to provide better services in the
                    future.</p>
                <p>Worry not, as we promise a completely confidential service, your comments would be anonymous.</p>
                <div className="mt-3">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdyPtOfIKj6rVI0eUY9l4j5_ZYR6APHTrT5uLpD7e6zHLYQIQ/viewform?usp=sf_link'
                       target="_blank">
                        <Button variant="secondary" className="buttonHome">Feedback Form</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent;
