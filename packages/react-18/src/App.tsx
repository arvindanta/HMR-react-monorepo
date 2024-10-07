import { useState, lazy, Suspense } from "react";
import "./App.css";
const MyComponent = lazy(() =>
  import("react-16-app").then((module) => ({ default: module.Button16 }))
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>  <h1>Vite + React 18</h1>
      <div>
      <Suspense fallback={<div>loading...</div>}>

        <MyComponent onClick={() => console.log("Button clicked")}
        />
     </Suspense>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
