import { Component } from "react";
import { Helmet } from "react-helmet";

class EditorChoice extends Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Read top recommed editor's choice</title>
                </Helmet>
                <h4>THIS IS EDITOR</h4>
            </div>
        );
    }
}
export default EditorChoice;