import { useState } from "react";
import "./App.css";
import { AppRoutes } from "./routes";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <AppRoutes loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
