import { writeJsonFile } from "write-json-file";

function Field(props: { label: string }) {
  return (
    <>
      <label>
        {" "}
        {props.label}
        <input type="text" />
      </label>
    </>
  );
}

function Admin(props: { file: string }) {
  const filePath = "../json/" + props.file + ".json";
  const file = require(filePath); //replace with api call

  function writeToFile(data: any) {
    writeJsonFile(filePath, data);
  }

  return (
    <>
      <div className="admin">
        <form onSubmit={writeToFile}>
          <Field label="" /> {/* map to each key in json */}
          <input type="submit" value="Save" />
        </form>
      </div>
    </>
  );
}

export default Admin;
