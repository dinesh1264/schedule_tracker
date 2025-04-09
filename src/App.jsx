import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Tracker } from "./components/Tracker";
import { Todo } from "./components/Todo";
import { Layout } from "./components/Layout";
import { RoadmapLayout } from "./components/roadmap/RoadmapLayout";

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Programming } from "./components/roadmap/Programming";
import {Math} from "./components/roadmap/Math";
import {Electronics} from "./components/roadmap/Electronics";
import {Economics} from "./components/roadmap/Economics";
import {Finance} from "./components/roadmap/Finance";
import { Cryptoeconomics } from "./components/roadmap/Cryptoeconomics";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Form />} />
      <Route path="tasks" element={<Todo />} />
      <Route path="stats" element={<Tracker />} />
      <Route path="roadmap" element={<RoadmapLayout />}>
        <Route index element={<Programming/>}/>
        <Route path="maths" element={<Math/>}/>
        <Route path="electronics" element={<Electronics/>}/>
        <Route path="economics" element={<Economics/>}/>
        <Route path="finance" element={<Finance/>}/>
        <Route path="cryptoeconomics" element={<Cryptoeconomics/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div>
        <main>
          <RouterProvider router={router} />
        </main>
      </div>
    </>
  );
}

export default App;
