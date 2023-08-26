import { IParsedClub } from "../../types/clubs";
import clubsData from "../../../fixtures/clubs.json";
import { useEffect } from "react";
const clubs: IParsedClub[] = clubsData;

export default function Home() {
  useEffect(() => {}, []);

  const addNewHandler = () => {
    console.log("Add new handled");
  };
  const deleteHandler = (id: number) => {
    console.log("Delete handled with ", id);
  };

  const editHandler = (id: number) => {
    console.log("Edit handled with ", id);
  };

  const viewHandler = (id: number) => {
    console.log("View handled with ", id);
  };

  return (
    <div className="p-2">
      <h2 className="text-mainWhite font-bold text-center text-sm md:text-xl">
        There are currently {clubs.length} clubs
        <MainButton text="Add New" onClick={addNewHandler} />
      </h2>
      <ClubsTable
        clubs={clubs}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        viewHandler={viewHandler}
      />
    </div>
  );
}

function ClubsTable(props: {
  clubs: IParsedClub[];
  deleteHandler: (id: number) => void;
  editHandler: (id: number) => void;
  viewHandler: (id: number) => void;
}) {
  const { clubs, deleteHandler, editHandler, viewHandler } = props;
  return (
    <table className="my-4 m-auto font-bold text-2xs bg-mainGray rounded rounded-b-lg md:text-base">
      <thead>
        <tr className="text-mainWhite text-sm md:text-xl">
          <th className="rounded pb-1 pt-2 md: px-4 pb-2 pt-4">Crest</th>
          <th className="rounded pb-1 pt-2 md: px-4 pb-2 pt-4">Team</th>
          <th className="rounded pb-1 pt-2 md: px-4 pb-2 pt-4">Country</th>
          <th className="rounded pb-1 pt-2 md: px-4 pb-2 pt-4">Actions</th>
        </tr>
      </thead>
      <tbody className="text-center text-mainWhite">
        {clubs.map((club) => (
          <tr key={club.id} className="text-center text-mainWhite ">
            <td className="rounded">
              <img
                src={club.crestSrc}
                className="m-auto w-12 md:w-20 m-2 p-2"
              />
            </td>
            <td className="rounded">{club.name}</td>
            <td className="rounded">{club.country}</td>
            <td className="rounded">
              <ButtonGroup>
                <TableButton text="View" onClick={() => viewHandler(club.id)} />
                <TableButton text="Edit" onClick={() => editHandler(club.id)} />
                <TableButton
                  text="Delete"
                  onClick={() => deleteHandler(club.id)}
                />
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TableButton(props: { text: string; onClick: () => void }) {
  return (
    <button
      className="m-1 py-1 px-2 bg-mainRed text-mainWhite font-bold rounded text-2xs rounded bg-mainGray md:text-base md:py-2 md:px-4"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function MainButton(props: { text: string; onClick: () => void }) {
  return (
    <button
      className="m-2 p-1 bg-mainRed text-mainWhite font-bold rounded text-xs rounded bg-mainGray md:text-base md:p-2"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function ButtonGroup(props: { children: React.ReactNode }) {
  return <div className="flex md:m-2 p-2">{props.children}</div>;
}
