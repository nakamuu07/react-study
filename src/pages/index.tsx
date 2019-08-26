import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import TopComponent from './Top';
import StateComponent from './State';
import PropsComponent from './Props';
import Frame from '../components/templates/Frame';

type TOutter = RouteComponentProps;

type PagesProps = TOutter;

const Pages: React.FC<PagesProps> = () => {
  const renderRedirect = () => <Redirect to="/top" />;

  return (
    <Frame>
      <Switch>
        <Route component={PropsComponent} exact={true} path="/props" />
        <Route component={StateComponent} exact={true} path="/state" />
        <Route component={TopComponent} exact={true} path="/top" />
        <Route exact={true} path="/" render={renderRedirect} />
      </Switch>
    </Frame>
  );
};

export default Pages;
