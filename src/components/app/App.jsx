import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import { MainTop } from '../mainTop/MainTop';
import { Grid } from '../grid/Grid';
import { Typography } from '../typography/Typography';
import { UI } from '../ui/UI';
import { Footer } from '../footer/Footer';

import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <Sidebar />

      <MainTop />

      <main>
        <Grid />
        <Typography />
        <UI />
      </main>

      <Footer />
    </div>
  );
}

export default App;
