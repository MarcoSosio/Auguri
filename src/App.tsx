import "./App.css";
import Auguri from "./sections/Auguri";
import Dietro from "./sections/Dietro";
import OraPuoi from "./sections/OraPuoi";
import Pensiero from "./sections/Pensiero";

function App(){
    return( 
    <div className="flex flex-col items-start text-justify m-6 gap-4">
        <Auguri></Auguri>
        <Pensiero></Pensiero>
        <OraPuoi></OraPuoi>
        <Dietro></Dietro>
    </div>
    );
}

export default App;
