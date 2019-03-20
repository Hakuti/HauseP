import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import NavHeader from "../header";
import { Layout, Menu, Breadcrumb } from 'antd';


class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
        <NavHeader />
        <Route exact path="/" component={App} />
        <Route  path="/posts" component={Posts} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default ReactRouter;