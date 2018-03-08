import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image centered
                              src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/></Menu.Item>
            <Menu.Item position="right" style={{ color: '#ccc' }}>CAFES</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>HOTELS</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>CASINOS</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>LIVE</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>SHOP</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>BLOG</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>REWARDS</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
