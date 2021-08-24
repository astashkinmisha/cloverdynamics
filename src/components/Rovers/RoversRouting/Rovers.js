import {BrowserRouter as Router, Link, Route, useHistory} from "react-router-dom";
import Curiosity from "../Curiosity/Curiosity";
import Opportunity from "../Opportunity/Opportunity";
import Spirit from "../Spirit/Spirit";
import './Rovers.css'


export default function Rovers (){
    let history = useHistory()
    return (
        <Router>
            <div>
                <button className={'main-button'} onClick={history.goBack}> Back to Main Page</button>
            <div className={'rovers-photos-link'}>
                <Link to={'/rovers/curiosity'}> Curiosity</Link>
                <Link to={'/rovers/opportunity'}> Opportunity</Link>
                <Link to={'/rovers/spirit'}> Spirit</Link>
            </div>
            </div>
            <Route path={'/rovers/curiosity'} component={Curiosity}/>
            <Route path={'/rovers/opportunity'} component={Opportunity}/>
            <Route path={'/rovers/spirit'} component={Spirit}/>
        </Router>
    );
}
