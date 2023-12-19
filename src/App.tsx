import { Header } from "./components";
import { Home, ClubAdd, ClubView, ClubDelete, ClubEdit } from "./routes";
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
          <Route path="club/edit/:id" element={<ClubEdit />} />
        </Routes>
      </div>
    </ClubsProvider>
  );
}
export default App;
