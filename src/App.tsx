import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ClubView from "./components/ClubView/ClubView";
import ClubDelete from "./components/ClubDelete/ClubDelete";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-mainBlack min-h-screen min-w-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="club/view/:id" element={<ClubView />} />
        <Route path="club/delete/:id" element={<ClubDelete />} />
      </Routes>
    </div>
  );
}
export default App;
