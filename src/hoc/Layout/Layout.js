import React, {Component, Fragment} from 'react';
import Toolbar from "../../components/UI/Navigation/Toolbar/Toolbar";
import classes from './Layout.module.css';
import SideDrawer from "../../components/UI/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        isSideDrawerOpened: false
    };

    sideDrawerToggle = () => {
      console.log('her sobachiy')
      this.setState(prevState=> {
          return {isSideDrawerOpened: !prevState.isSideDrawerOpened}
      })
    };

    render() {
        return (
            <Fragment>
                <Toolbar clicked = {this.sideDrawerToggle} show = {this.state.isSideDrawerOpened}/>
                <SideDrawer clicked = {this.sideDrawerToggle} show = {this.state.isSideDrawerOpened} />
                <main className={classes.Content}>{this.props.children}</main>
            </Fragment>
        );
    }
}

export default Layout;