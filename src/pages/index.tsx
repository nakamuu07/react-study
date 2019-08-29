import Frame from 'components/templates/Frame';
import PropsComponent from 'pages/Props';
import SampleComponent from 'pages/Sample';
import StateComponent from 'pages/State';
import TopComponent from 'pages/Top';
import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';

type TOutter = RouteComponentProps;

type PagesProps = TOutter;

const Pages: React.FC<PagesProps> = () => {
  const renderRedirect = () => <Redirect to="/top" />;

  return (
    <Frame>
      <Switch>
        <Route component={SampleComponent} exact={true} path="/sample" />
        <Route component={PropsComponent} exact={true} path="/props" />
        <Route component={StateComponent} exact={true} path="/state" />
        <Route component={TopComponent} exact={true} path="/top" />
        <Route exact={true} path="/" render={renderRedirect} />
      </Switch>
    </Frame>
  );
};

export default Pages;
