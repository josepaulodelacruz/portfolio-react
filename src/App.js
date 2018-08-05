import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer,Content} from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none' , color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to={{ pathname: '/resume', state: {transform: 'translate(100%)', OpenLoad: true} }}>Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Credentials</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none' , color: 'Grey'}} to="/">MyPortfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Credentials</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}


export default App;
