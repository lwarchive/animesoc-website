import "../index.css";
import {writeJsonFile} from 'write-json-file';

function Field(props) {
    return (
        <>
            <label> {props.label} 
            <input type="text" />
            </label>
        </>
    )
}

function Admin(props) {

    const filePath = '../json/' + props.file + '.json'
    const file = require(filePath); //replace with api call

    function writeToFile(data) {
        writeJsonFile(filePath, data);
    }

    return (
        <>
            <div className="admin">
                <form onSubmit={this.writeToFile}>
                     <Field /> {/* map to each key in json */}
                    <input type="submit" value="Save" />
                </form>
            </div>
        </>
    );
}

export default Admin;