import Login from "./container/Login";
import {BrowserRouter, Route} from 'react-router-dom'
import Gallery from "./container/Gallery";

function App() {
  return (
    <>
    <BrowserRouter>
      <Route path='/  ' exact component={Login}/>
      <Route path='/gallery' exact component={Gallery}/>
    </BrowserRouter>
    </>  
  );
}

export default App;
