import { useParams, Link } from "react-router-dom";
import { IClub } from "../../types/clubs";
import useViewClub from "../../hooks/useViewClub";
import useClubDelete from "../../hooks/useClubDelete";
import { Error, Loading } from "../../components";

export default function ClubDelete() {
  const { id } = useParams();
  const { data, loading, error } = useViewClub(Number(id));
  const { setClubToDelete, clubToDelete, state } = useClubDelete();
  const clubDeleteStats = state;

  if (error) return <Error error={error} />;

  if (clubDeleteStats.loading && loading)
    return <Loading isDisplayed={loading} />;

  if (data && !clubToDelete)
    return <ClubDeleteWarning club={data} setClubToDelete={setClubToDelete} />;

  if (clubDeleteStats.data && clubToDelete) return <ClubSuccesfullyDeleted />;
}

type ClubDeleteWarningProps = {
  club: IClub;
  setClubToDelete: (id: number) => void;
};
function ClubDeleteWarning({ club, setClubToDelete }: ClubDeleteWarningProps) {
  return (
    <div className="m-auto p-2 flex">
      <div className="m-auto p-8 bg-mainGray rounded flex flex-col text-center md:p-2">
        <h2 className="text-mainWhite font-bold text-base md:text-2xl">
          Are you sure you want to delete?
        </h2>
        <div className="m-auto p-2">
          <h2 className="text-mainRed font-bold text-base md:text-2xl">
            {club.name}
          </h2>
          <img src={club.crestSrc} className="max-w-h m-auto" />
        </div>
        <div>
          <Link to="/">
            <button className="m-2 p-1 bg-mainRed text-mainWhite font-bold rounded text-base rounded bg-mainGray md:text-xl md:p-2">
              Cancel
            </button>
          </Link>
          <button
            className="m-2 p-1 bg-mainRed text-mainWhite font-bold rounded text-base rounded bg-mainGray md:text-xl md:p-2"
            onClick={() => setClubToDelete(club.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function ClubSuccesfullyDeleted() {
  return (
    <div className="m-auto p-2 flex">
      <div className="m-auto p-8 bg-mainGray rounded flex flex-col text-center md:p-2">
        <h2 className="text-mainWhite font-bold text-base md:text-2xl">
          Club successfully deleted!
        </h2>
        <Link to="/">
          <button className="m-2 p-1 bg-mainRed text-mainWhite font-bold rounded text-base rounded bg-mainGray md:text-xl md:p-2">
            Return to Club List
          </button>
        </Link>
      </div>
    </div>
  );
}
