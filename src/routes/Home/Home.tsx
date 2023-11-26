import { IClub } from "../../types/clubs";
import { Loading, Error } from "../../components";
import useClubsList from "../../hooks/useClubsList";
import { Link } from "react-router-dom";

type MainButtonProps = {
  text: string;
  action: string;
};

type TableButtonProps = {
  text: string;
  action: string;
  clubId: number;
};

export default function Home() {
  const { data, loading, error } = useClubsList();

  if (loading) return <Loading isDisplayed={loading} />;

  if (Array.isArray(data)) return <ClubList clubs={data} />;

  if (error) return <Error error={error} />;
}
function ClubList({ clubs }: { clubs: IClub[] }) {
  return (
    <div className="p-2">
      <h2 className="text-mainWhite font-bold text-center text-sm md:text-xl">
        There are currently {clubs.length} clubs
        <MainButton text="Add New" action="add" />
      </h2>
      <ClubsTable clubs={clubs} />
    </div>
  );
}

function ClubsTable({ clubs }: { clubs: IClub[] }) {
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
          <ClubRow club={club} key={club.name} />
        ))}
      </tbody>
    </table>
  );
}

function ClubRow({ club }: { club: IClub }) {
  return (
    <tr key={club.id} className="text-center text-mainWhite ">
      <td className="rounded">
        <img src={club.crestSrc} className="m-auto w-12 md:w-20 m-2 p-2" />
      </td>
      <td className="rounded">{club.name}</td>
      <td className="rounded">{club.country}</td>
      <td className="rounded">
        <div className="flex md:m-2 p-2">
          <TableButton text="View" action="view" clubId={club.id} />
          <TableButton text="Edit" action="edit" clubId={club.id} />
          <TableButton text="Delete" action="delete" clubId={club.id} />
        </div>
      </td>
    </tr>
  );
}
function TableButton({ action, text, clubId }: TableButtonProps) {
  return (
    <Link to={`/club/${action}/${clubId}`}>
      <button className="m-1 py-1 px-2 bg-mainRed text-mainWhite font-bold rounded text-2xs rounded bg-mainGray md:text-base md:py-2 md:px-4">
        {text}
      </button>
    </Link>
  );
}

function MainButton({ action, text }: MainButtonProps) {
  return (
    <Link to={`/club/${action}`}>
      <button className="m-2 p-1 bg-mainRed text-mainWhite font-bold rounded text-xs rounded bg-mainGray md:text-base md:p-2">
        {text}
      </button>
    </Link>
  );
}
