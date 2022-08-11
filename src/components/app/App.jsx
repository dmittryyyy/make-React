import { React, useState } from 'react';

import { Menu } from '../menu/Menu';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import { MainTop } from '../mainTop/MainTop';
import { Grid } from '../grid/Grid';
import { Typography } from '../typography/Typography';
import { UI } from '../ui/UI';
import { Footer } from '../footer/Footer';

import './app.scss';

function App() {

  const [isMenu, isSetMenu] = useState(false);

  const showHideMenu = () => {
    if (isMenu) {
      isSetMenu(false);
      document.body.style.overflow = "scroll"
    } else {
      isSetMenu(true);
      document.body.style.overflow = "hidden"
    }
  }

  return (
    <div className="App">

      <div className={`App__menu ${isMenu ? 'show' : ''}`}>
        <Menu hideMenu={showHideMenu} />
      </div>

      <div className="App__container">
        <Header showMenu={showHideMenu} />

        <main>
          <div className="main__menu">
            <Sidebar />
          </div>

          <div className="main__content">
            <MainTop />
            <Grid />
            <Typography />
            <UI />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
