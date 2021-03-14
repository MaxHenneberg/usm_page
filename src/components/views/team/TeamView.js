import React, {useContext} from "react";
import {LanguageContext} from "../../../App";
import teamJson from "../../../contrib/content/team";
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Gravatar from "react-gravatar"
import "./TeamView.css"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function getStyleObjectFromString(str) {
  const style = {};
  str.split(";").forEach(el => {
    const [property, value] = el.split(":");
    if (!property) {
      return;
    }

    style[property] = value.trim();
  });
  console.log(style);
  return style;
};

function TeamView(props) {
  const languageContext = useContext(LanguageContext);
  let team = teamJson.en;
  if(languageContext.language === 'my'){
    team = teamJson.my;
  }
  return (
      <div>
        <br/>
        <h1>{languageContext.content.team.meetTheTeam}</h1>
        <br/>
        <div className="w-100 h-100">
          {team.team.map((teamList) => {
            return (
                <CardDeck>
                  {teamList.map((member, i) => {
                    return (
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={
                          <Popover id={i}>
                            <Popover.Title as="h3">{member.name}</Popover.Title>
                            <Popover.Content>
                              {member.info}
                            </Popover.Content>
                          </Popover>}>
                          <Card className="teamCard">
                            <Card.Header>
                              <div className="teamImgContainer">
                                <img src={member.img} style={getStyleObjectFromString(member.style)} width='100px' height='100px'/>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Card.Title>{member.name}</Card.Title>
                              <Card.Text>
                                {member.role}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </OverlayTrigger>
                    );
                  })}
                </CardDeck>)

          })}
        </div>
        <Button variant="primary" className="m-4" href="#/volunteer">{languageContext.content.team.joinus}</Button>
      </div>
  )
}

export default TeamView;
