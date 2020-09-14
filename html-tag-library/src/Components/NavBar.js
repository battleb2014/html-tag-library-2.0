import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div classname='navBar'>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <Link to='/fullList'>
                                <button>
                                    Full List
                                </button>
                            </Link>
                            <Link to='/basic'>
                                <button>
                                    Basic
                                </button>
                            </Link>
                            <Link to='/formatting'>
                                <button>
                                    Formatting
                                </button>
                            </Link>
                            <Link to='/formsAndInputs'>
                                <button>
                                    Forms and Inputs
                                </button>
                            </Link>
                            <Link to='/frames'>
                                <button>
                                    Frames
                                </button>
                            </Link>
                            <Link to='/images'>
                                <button>
                                    Images
                                </button>
                            </Link>
                            <Link to='/audioVideo'>
                                <button>
                                    Audio/Video
                                </button>
                            </Link>
                            <Link to='/links'>
                                <button>
                                    Links
                                </button>
                            </Link>
                            <Link to='/lists'>
                                <button>
                                    Lists
                                </button>
                            </Link>
                            <Link to='/tables'>
                                <button>
                                    Tables
                                </button>
                            </Link>
                            <Link to='/stylesAndSemantics'>
                                <button>
                                    Styles and Semantics
                                </button>
                            </Link>
                            <Link to='/meta'>
                                <button>
                                    Meta
                                </button>
                            </Link>
                            <Link to='/programming'>
                                <button>
                                    Programming
                                </button>
                            </Link>
                        </ul>
                    </nav>

                </div>
            </Router >
        </div >
    );
}

export default NavBar;