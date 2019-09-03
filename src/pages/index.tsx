import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import PropsComponent from './Props';
import Sample1Component from './Redux/Sample1';
import StateComponent from './State';
import TopComponent from './Top';
import Frame from '../components/templates/Frame';

type TOutter = RouteComponentProps;

type PagesProps = TOutter;

const Pages: React.FC<PagesProps> = () => {
  const renderRedirect = () => <Redirect to="/top" />;

  return (
    <Frame>
      <Switch>
        <Route
          component={Sample1Component}
          exact={true}
          path="/redux/sample1"
        />
        <Route component={PropsComponent} exact={true} path="/props" />
        <Route component={StateComponent} exact={true} path="/state" />
        <Route component={TopComponent} exact={true} path="/top" />
        <Route exact={true} path="/" render={renderRedirect} />
      </Switch>
    </Frame>
  );
};

export default Pages;
