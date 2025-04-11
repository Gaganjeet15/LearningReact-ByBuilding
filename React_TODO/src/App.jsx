import { useState } from "react";

function App() {
  let [input_text, setInput_text] = useState("HII");
  const [data, setData] = useState(["Alice", "Bob", "Charlie"]);
  function input_show(e) {
    setInput_text(e.target.value);
  }

  function add_data() {
    if (data.length > 10) {
      alert("Storage Full");
    } else {
      setData([...data, input_text]); // Add current input to data array
    }
  }
  return (
    <>
      <div>
        <input type="text" onChange={input_show} />
        <button onClick={add_data}>Add</button>
      </div>
      <div>
        <table className="table table-hover justify-content-center align-items-center">
          <thead>
            <tr>
              <th scope="col">NAME</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list) => (
              <tr key={list}>
                <td>{list}</td>
                <td>
                  <button
                    onClick={() =>
                      setData(data.filter((item) => item !== list))
                    }>
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
