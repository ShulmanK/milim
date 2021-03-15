import React, {Component, Fragment} from 'react'
import Container from '@/containers/Container/Container'
import Toolbar from "@components/UI/Navigation/Toolbar/Toolbar"
import SideDrawer from "@components/UI/Navigation/SideDrawer/SideDrawer"
import s from './Layout.module.scss';

class Layout extends Component {
    state = {
        isSideDrawerOpened: false
    };

    sideDrawerToggle = () => {
      this.setState(prevState=> {
          return {isSideDrawerOpened: !prevState.isSideDrawerOpened}
      })
    };

    render() {
        return (
            <div className={s.Layout}>
                <Toolbar clicked = {this.sideDrawerToggle} show = {this.state.isSideDrawerOpened}/>
                {/* <SideDrawer clicked = {this.sideDrawerToggle} show = {this.state.isSideDrawerOpened} /> */}
                <Container children={this.props.children}/>
            </div>
        );
    }
}

export default Layout;