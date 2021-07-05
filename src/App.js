import React from "react";

import Layout from "./components/Layout/Layout";
import Game from "./containers/Game/Game";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Layout>
        <Game />
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
