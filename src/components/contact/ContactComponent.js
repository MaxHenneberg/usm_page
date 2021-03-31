import React from "react";
import "./ContactComponent.css"
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

function ContactComponent(props) {
    return (
        <div>
            <h2>Get Connected</h2>
            <div className="mt-4">
                If you have any queries, or perhaps have something to share with the LineHayat team, please get in touch
                with us:
            </div>
            <div className="horizontalCenter mt-4">
                <table>
                    <tr>
                        <td>
                            <i className="far fa-envelope socialsIcon"></i>
                        </td>
                        <td className="socialsText">
                            <span>xxx@xxx.com</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a href="" target="_blank">
                                <i className="fab fa-instagram socialsIcon"></i>
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="" target="_blank">
                                <span>linehayat_usm</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="" target="_blank">
                                <i className="fab fa-facebook socialsIcon"></i>
                            </a>
                        </td>
                        <td className="socialsText">
                            <a href="" target="_blank">
                                <span>LineHayat</span>
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="mt-4">
                Or by simply filling out the following form:
                <div className="mt-3">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdyPtOfIKj6rVI0eUY9l4j5_ZYR6APHTrT5uLpD7e6zHLYQIQ/viewform?usp=sf_link'
                       target="_blank">
                        <Button variant="primary">Feedback Form</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent;