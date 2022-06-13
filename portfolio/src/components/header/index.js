import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from './style';

class Header extends Component {
    render() {
        return (
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem href="/">HOME</NavItem>
                <NavItem href="/research-upskilling">Research and Upskilling</NavItem>
                <NavItem href="/planning-control">Planning and Control</NavItem>
                <NavItem href="/communication-teamwork">Communication and Teamwork</NavItem>
                <NavItem href="/development-qualityassurance">Development and Quality Assurance</NavItem>
            </Nav>
        </HeaderWrapper>
        )
    }
}

export default Header;