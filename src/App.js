import logo from './logo.svg';
import './App.css';
import './lux.css';
import * as React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from "./components/header/HeaderComponent";
import HomeView from "./components/views/home/HomeView";
import {useState} from "react";
import iContent from "./contrib/content/content";
import FooterComponent from "./components/footer/FooterComponent";
import VolunteerView from "./components/views/volunteer/VolunteerView";
import TeamView from "./components/views/team/TeamView";
import ChatView from "./components/views/chat/ChatView";
import ResourceView from "./components/views/resources/ResourceView";

export const LanguageContext = React.createContext({
  language: 'my',
  content: iContent.my,
});

function App() {
  const [routes, setRoutes] = useState([
    {component: HomeView, path: '/', exact: true},
    {component: VolunteerView, path: '/volunteer', exact: true},
    {component: ChatView, path: '/help', exact: true},
    {component: TeamView, path: '/team', exact: true},
    {component: ResourceView, path: '/resources', exact: true},
    {component: HomeView, path: '/*', exact: true},
  ]);
  const [languageContext, setLanguageContext] = React.useState({
    language: 'en',
    content: iContent.en
  });

  const updateLanguage = () => {
    if (languageContext.language === 'en') {
      setLanguageContext({language: 'my', content: iContent.my});
    } else {
      setLanguageContext({language: 'en', content: iContent.en});
    }

  };

  return (
      <div>

        <LanguageContext.Provider value={languageContext}>
          <div className="App">
          <HeaderComponent updateLanguage={updateLanguage}/>
          <Router>
            <div className="content" >
              <Switch>
                //...route == route.component = component,
                route.path = path,
                route.exact= exact
                {routes.map(
                    (route, i) => (
                        <Route key={i} {...route}/>))}
              </Switch>
            </div>
          </Router>
          </div>
          <FooterComponent/>
        </LanguageContext.Provider>
      </div>
  );
}

export default App;
