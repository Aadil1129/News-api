import IndNewsApi from "./components/home/indnews";
import UsNewsApi from "./components/home/usnews";
import AusNewsApi from "./components/home/ausnews";
import UkrNewsApi from "./components/home/ukrainenews";
import CanNewsApi from "./components/home/canadanews";
import ChinNewsApi from "./components/home/chinanews";
import JapanNewsApi from "./components/home/japannews";
import RusNewsApi from "./components/home/russianews";
import NewZeaNewsApi from "./components/home/newzealandnews";
import UKNewsApi from "./components/home/uknews";
import TurNewsApi from "./components/home/turkeynews";
import SANewsApi from "./components/home/southanews";
import NewsApi from "./components/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<NewsApi />} />
        <Route path="ind" exact element={<IndNewsApi />} />
        <Route path="/us" exact element={<UsNewsApi />} />
        <Route path="/aus" exact element={<AusNewsApi />} />
        <Route path="/ru" exact element={<RusNewsApi />} />
        <Route path="/ua" exact element={<UkrNewsApi />} />
        <Route path="/ca" exact element={<CanNewsApi />} />
        <Route path="/cn" exact element={<ChinNewsApi />} />
        <Route path="/jp" exact element={<JapanNewsApi />} />
        <Route path="/nz" exact element={<NewZeaNewsApi />} />
        <Route path="/gb" exact element={<UKNewsApi />} />
        <Route path="/tr" exact element={<TurNewsApi />} />
        <Route path="/za" exact element={<SANewsApi />} />
      </Routes>
    </div>
  );
}

export default App;
