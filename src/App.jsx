import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import DataTable from "./DataTable";

const BASE_URL = "https://demo2211087.mockable.io/mock";

function App() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.post(BASE_URL, {
        Headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response?.data?.companies);
    } catch (error) {
      setError(error);
    }
  }
  console.log("data", data);
  console.log("error", error);
  if (!data) return <div>Loading Table</div>;
  return (
    <div className="App">
      <h1 className="heading">
        Company Data List{" "}
        <span>
          {" "}
          <a target="_new" href="https://bhanusingh.website">
            Check portfolio and resume
          </a>
        </span>
      </h1>
      {data && <DataTable data={data} />}
    </div>
  );
}

export default App;
