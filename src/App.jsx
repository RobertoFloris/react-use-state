import 'bootstrap/dist/css/bootstrap.min.css';

import languages from "./data/languages"

import Header from './assets/Header';
import Main from './assets/Main';

const App = () => {
  return (
    <>
      <Header />

      <Main languages={languages} />


    </>
  )
}

export default App