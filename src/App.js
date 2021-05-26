import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

import SideBar from "./containers/sideBar";
import data from "./assets/data";
import Card from "./components/card";
import "./scss/main.scss";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main>
      <SideBar show={showSidebar} sidebarClose={()=>setShowSidebar(false)}/>
      <header>
        <div
          className="header-icon-bg"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <TiShoppingCart className="header-icon" />
        </div>
      </header>
      <section className="card-container">
        {data.map((card) => {
          return <Card key={card.product_id} card={card} />;
        })}
      </section>
    </main>
  );
}

export default App;
