import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { black } from "ansi-colors";
import MenuItem from "antd/lib/menu/MenuItem";

const { Header, Content, Footer  } = Layout;

class NavHeader extends Component {
  active = {
    fontWeight: "bold",
    // color: ""
  };

  header = {
      position: "fixed",
      width: "100%",
      background: "white",
      zIndex: 1
    // display: "flex",
    // justifyContent: "space-evenly",
    // listStyle: "none",
    // height: "90px",
    // background: "black",
    // width: "100%"
  };
  render() {
    return (
      <Header style={this.header}>
      <Menu 
      mode="horizontal"
      style={{lineHeight: '63px', float: "right"}}
      >
        <Menu.Item> <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink> 
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/posts" activeStyle={this.active}>
          Posts
        </NavLink>
        </Menu.Item>
      </Menu>
      </Header>
    );
  }
}

export default NavHeader;