import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import App from "./App";
import Intro from "./routes/Intro";
import Uno from "./routes/Uno";
import FourOhFour from "./routes/404";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            {/* 
                Define routes for each page in the app
                Note Intro page is index route 
                and wildcard catches erroneous URLS
            */}
            <Route path="/" element={<App />}>
                <Route index element={<Intro />} />
                <Route path="/uno" element={<Uno />} />
                <Route path="*" element={<FourOhFour />}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement,
);