import React, {Component} from 'react';
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar/>
				<div id="colorlib-main">
					<Home/>
					<Skills/>
					<Projects/>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
