import Rovers from "./components/Rovers/Rovers";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Photos from "./components/Rovers/Photos";
import Rover from "./components/Rovers/Rover";


function App() {
    return (
        <Router>
            <div>
                {/*<Link to={'/rovers/photos'}> Rovers</Link>*/}
            <Rovers/>
            </div>
        </Router>
);
// <Route path={'/rovers/photos'} component={Rov} render={props => {
// return <Photos{...props}/>}
// }/>
    }

export default App;
