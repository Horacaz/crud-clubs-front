import { Header } from "./components";
import { Home, ClubAdd, ClubView, ClubDelete, ClubEdit } from "./routes";
import resetState from "./hooks/useClubsApp";

import { ClubsProvider } from "./context/clubsContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ClubsProvider>
      <div className="bg-mainBlack min-h-screen min-w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} loader={() => resetState()} />
          <Route
            path="club/view/:id"
            element={<ClubView />}
            loader={() => resetState()}
          />
          <Route
            path="club/delete/:id"
            element={<ClubDelete />}
            loader={() => resetState()}
          />
          <Route
            path="club/add"
            element={<ClubAdd />}
            loader={() => resetState()}
          />
          <Route
            path="club/edit/:id"
            element={<ClubEdit />}
            loader={() => resetState()}
          />
        </Routes>
      </div>
    </ClubsProvider>
  );
}
export default App;
