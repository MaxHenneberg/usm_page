import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import helplinesJson from "../../contrib/content/helplines";
import "./HelplinesComponent.css"
import Card from "react-bootstrap/Card";

function HelpLinesComponent(props) {
    const languageContext = useContext(LanguageContext);
    let helplines = helplinesJson.en;
    if (languageContext.language === 'my') {
        helplines = helplinesJson.my;
    }
    return (
        <div style={{width:'70%', margin:'0 auto'}}>
            {helplines.helplines.map((helpline) => {
                return <Card className="helplines-card">
                    <Card.Body className="helplines-card-body">
                        <Card.Title>{helpline.title}</Card.Title>
                        <Card.Text>
                            <div dangerouslySetInnerHTML={{__html: helpline.body}}/>
                        </Card.Text>
                    </Card.Body>
                </Card>

            })}
        </div>
    )
}

export default HelpLinesComponent;
