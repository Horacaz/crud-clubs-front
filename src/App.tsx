import Header from "./components/Header";
import Home from "./components/Home";
import ClubView from "./components/ClubView";
import ClubDelete from "./components/ClubDelete";
import ClubAdd from "./components/ClubAdd";
import { ClubsProvider } from "./context/clubsContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ClubsProvider>
      <div className="bg-mainBlack min-h-screen min-w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="club/view/:id" element={<ClubView />} />
          <Route path="club/delete/:id" element={<ClubDelete />} />
          <Route path="club/add" element={<ClubAdd />} />
        </Routes>
      </div>
    </ClubsProvider>
  );
}
export default App;
