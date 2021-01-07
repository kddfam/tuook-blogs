import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Blog from '../component/Blog';
import Contact from '../component/Contact';
import EditorChoice from '../component/Editor';
import Home from '../component/Home';
import Recent from '../component/Recent';
import UserBlog from '../component/User';
import menuIcon from '../assets/icons/grid-outline.svg';
import './navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    showMenuButtonClick = () => {
        if(this.state.showMenu) {
            this.setState({showMenu: false})
        }
        else {
            this.setState({showMenu: true})
        }
    }

    render() {
        return(
            <Router>
                <Fragment>
                    <div className="navbar-container">
                        <div className="navbar">
                            <div className="brand-name"><h4><Link className="link-brandname-contact" to="/home">Tuook Blogs</Link></h4></div>
                            <div className="routes">
                                <ul className="routes-list">
                                    <li><Link className="link-routes" to="/editor">Editor's choice</Link></li>
                                    <li><Link className="link-routes" to="/user">User's blogs</Link></li>
                                    <li><Link className="link-routes" to="/recent">Recents</Link></li>
                                </ul>
                            </div>
                            <div className="contact"><h4><Link className="link-brandname-contact" to="/contact">Contact Us</Link></h4></div>
                        </div>
                        <div className="navbar-phone">
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <h3 style={{color: "white"}}><Link className="link-brandname-contact" to="/home">Tuook Blogs</Link></h3>
                                <img onClick={this.showMenuButtonClick} src={menuIcon} style={{background: "white", height: "8%", width: "8%"}} alt="menu_icon" />
                            </div>
                            {
                                this.state.showMenu ? <div>
                                    <ul style={{textAlign: "center"}}>
                                        <li onClick={this.showMenuButtonClick} style={{padding: "10px", marginTop: "10px", border: "1px solid white"}}><Link className="link-routes" to="/editor">Editor's choice</Link></li>
                                        <li onClick={this.showMenuButtonClick} style={{padding: "10px", marginTop: "5px", border: "1px solid white"}}><Link className="link-routes" to="/user">User's blogs</Link></li>
                                        <li onClick={this.showMenuButtonClick} style={{padding: "10px", marginTop: "5px", border: "1px solid white"}}><Link className="link-routes" to="/recent">Recents</Link></li>
                                        <li onClick={this.showMenuButtonClick} style={{padding: "10px", marginTop: "5px", border: "1px solid white"}}><Link className="link-routes" to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div> : null
                            }
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/editor" component={EditorChoice} />
                        <Route path="/user" component={UserBlog} />
                        <Route path="/recent" component={Recent} />
                        <Route path="/contact" component={Contact} />
                        <Route exact path="/blogs/:blogId" component={Blog} />
                        <Route exact path="/news/:blogId" component={Blog} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}
export default Navbar;