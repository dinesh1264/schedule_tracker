import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Tracker } from "./components/Tracker";
import { Todo } from "./components/Todo"
import { Layout } from "./components/Layout";

import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Form/>} />
      <Route path="/tasks" element={<Todo/>} />
      <Route path="/stats" element={<Tracker/>} />
    </Route>
  )
)

function App() {
  return (
    <>
      <div>
        <main>
          <RouterProvider router={router}/>
        </main>
      </div>
    </>
  );
}

export default App;
