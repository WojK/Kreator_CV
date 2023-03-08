import React from "react";
import { Editor, Footer, Navbar } from "./components";
import MainLayoutPage from "./pages/MainLayoutPage";
import AdvicesPage from "./pages/AdvicesPage";
import ChooseTemplatePage from "./pages/ChooseTemplatePage";

import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayoutPage />}>
      <Route path="creator" element={<Editor />} />,
      <Route path="advices" element={<AdvicesPage />}/>,
      <Route path="about_us"></Route>,
      <Route path="my_account"></Route>,
    </Route>,
  ])
);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <div className="App">
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
