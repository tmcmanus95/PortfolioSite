import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/home/Home.jsx";
import Resume from "./components/resume/Resume.jsx";
import AboutMe from "./components/aboutme/AboutMe.jsx";
import ContactForm from "./components/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
