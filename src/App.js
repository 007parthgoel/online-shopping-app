import React from 'react';

import SideBar from './containers/sideBar';
import data from './assets/data';
import './scss/main.scss';

function App() {
  return (
    <main>
      <SideBar/>
      <header>cart</header>
      <section>cards</section>
    </main>
  );
}

export default App;
