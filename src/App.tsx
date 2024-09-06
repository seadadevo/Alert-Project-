import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Alert from "./component/ui/Alert/Alert";
import { BellRing, Scroll, CircleX , Check, Tags  } from "lucide-react";
function App() {
  return (
    <>
      <div>
        <Alert
          type="alert-danger"
          icon={<BellRing />}
          title={"Upgrade your plan"}>
          <p>
               "Then go to your Vite based <a href="#"> project and run</a> pnpm link —global vite (or the package manager that you used to link vite globally  Now restart the development server to ride on the bleeding edge!" 
          </p>
          </Alert>
        <Alert type="Note-danger"
         icon={<Scroll />} title={"Note"} 
         description={
          "Vite aims to provide SSR Guide support for common web development patterns- Before searching for  a Vite or compatible Rollup plugin, check out the Features Guide_ check out the Backend Integration guide instead-"
         }/>
       
        <Alert type="Wrong-danger"
         icon={<CircleX />} title={"Something went wrong"} 
         description={
          "if you are working with a normal static file server (except way more powerful'). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup."
         }/>
       
        <Alert type="Proccesed-danger"
         icon={<Check  />} title={"Your order has been processed"} 
         description={
          "Then go to your Vite <based project and run pnpm link —global vite (or tl used to link vite globally)_ Now restart the development server to ride o"
         }/>
       
        <Alert type="tips-danger"
         icon={<Tags  />} title={"Tips & Tricks"} 
         description={
          "You can also run the above script in your Cl setup to enable automatic"
        }/>
       
      </div>
    </>
  );
}

export default App;
