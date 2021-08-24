import Rovers from "./components/Rovers/RoversRouting/Rovers";
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import '@material-ui/core'
import {Button, Menu, MenuItem} from "@material-ui/core";
import {useState} from "react";

    function App() {
        // const [anchorEl, setAnchorEl] = useState(null);
        // const handleClick = (event) => {
        //     setAnchorEl(event.currentTarget);
        // };
        // const handleClose = () => {
        //     setAnchorEl(null);

        return (
            <Router>
                <div className={'main-screen'}>
                    {/*<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>*/}
                    {/*    Open Menu*/}
                    {/*</Button>*/}
                    {/*<Menu*/}
                    {/*    id="simple-menu"*/}
                    {/*    anchorEl={anchorEl}*/}
                    {/*    keepMounted*/}
                    {/*    open={Boolean(anchorEl)}*/}
                    {/*    onClose={handleClose}*/}
                    {/*>*/}
                    {/*    <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                    {/*    <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                    {/*    <MenuItem onClick={handleClose}>Logout</MenuItem>*/}
                    {/*</Menu>*/}
                    <Link to={'/rovers/'}>To rovers</Link>
                </div>
                <Route path={'/rovers/'} component={Rovers}/>
            </Router>
        );
    }

export default App;
