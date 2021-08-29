import React, {useContext} from "react";
import {LanguageContext} from "../../../App";
import teamJson from "../../../contrib/content/team";
import Button from "react-bootstrap/Button";
import "./TeamView.css"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import memberPhotos from "../../../contrib/Members Photos/memberPhotos";

function TeamView(props) {
    const languageContext = useContext(LanguageContext);
    let team = teamJson.team;
    return (
        <div id="team">
            <br/>
            <h1>{languageContext.content.team.meetTheTeam}</h1>
            <br/>
            <div className="organiGram">
                <h3>Organisation Chart</h3>
            </div>
            <div className="w-100 h-100">
                {team.map((teamList) => {
                    return (
                        <Row style={{height: '100%'}}>
                            {teamList.map((member, i) =>
                                (
                                    <Col xs={12} sm={12} md={4} lg={4}>
                                        <div className="teamImgContainer">
                                            <img src={memberPhotos.get(member.img)}
                                                 width='100px'
                                                 height='100px'/>
                                        </div>
                                        <div>
                                            <h4>{member.name}</h4>
                                            <p>{member.role}</p>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    )
                })}

            </div>
            <Button variant="primary" className="m-4" href="#/volunteer">{languageContext.content.team.joinus}</Button>
        </div>
    )
}

export default TeamView;
