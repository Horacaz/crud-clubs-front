import { useParams } from "react-router-dom";
import Loading from "../Loading";
import useViewClub from "../../hooks/useViewClub";
import { IParsedClub } from "../../types/clubs";
export default function ClubView() {
  const { id } = useParams();
  const { data, loading, error } = useViewClub(Number(id));

  if (loading) return <Loading isDisplayed={loading} />;

  if (data) return <ClubViewContent data={data} />;

  if (error) return <ErrorMessage />;
}

function ClubViewContent(props: { data: IParsedClub }) {
  const data: IParsedClub = props.data;
  return (
    <div className="flex flex-col items-center">
      <div className="m-2 p-2">
        <ClubInformation clubData={data} />
        <ClubContact clubData={data} />
        <ClubImage clubData={data} />
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="p-2">
      <h2 className="text-mainWhite font-bold text-center text-sm md:text-xl">
        An error has occured, please refresh and wait a moment.
      </h2>
    </div>
  );
}

function MainButton(props: { text: string; onClick: () => void }) {
  return (
    <button
      className="p-2 m-2 bg-mainRed text-mainWhite font-bold rounded text-base rounded bg-mainGray md:text-xl"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function ClubContact(props: { clubData: IParsedClub }) {
  const clubData: IParsedClub = props.clubData;
  return (
    <div className="bg-mainGray m-4 p-4 rounded-lg ">
      <h3 className="text-mainRed font-bold text-xl md:text-2xl">Contact</h3>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Address:{" "}
        <span className="text-mainRed font-bold">{clubData.address}</span>
      </p>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Website:{" "}
        <span className="text-mainRed font-bold">{clubData.website}</span>
      </p>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Email: <span className="text-mainRed font-bold">{clubData.email}</span>
      </p>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Phone: <span className="text-mainRed font-bold">{clubData.phone}</span>
      </p>
    </div>
  );
}

function ClubInformation(props: { clubData: IParsedClub }) {
  const clubData: IParsedClub = props.clubData;
  return (
    <div className="bg-mainGray m-4 p-4 rounded-lg ">
      <h3 className="text-mainRed font-bold text-xl md:text-2xl">
        Information
      </h3>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Name: <span className="text-mainRed font-bold">{clubData.name}</span>
      </p>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Country:{" "}
        <span className="text-mainRed font-bold">{clubData.country}</span>
      </p>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Club Colors:{" "}
        <span className="text-mainRed font-bold">{clubData.clubColors}</span>
      </p>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Founded:{" "}
        <span className="text-mainRed font-bold">{clubData.founded}</span>
      </p>
      <p className="text-base text-mainWhite font-bold md:text-xl">
        Venue: <span className="text-mainRed font-bold">{clubData.venue}</span>
      </p>
    </div>
  );
}

function ClubImage(props: { clubData: IParsedClub }) {
  const clubData: IParsedClub = props.clubData;
  return (
    <div className="bg-mainGray m-4 p-4 rounded text-center">
      <form className="flex flex-col justify-center items-center">
        <img src={clubData.crestSrc} className="max-w-h" />
        <h2 className="text-mainWhite font-bold text-xl md:text-2xl">
          {clubData.shortName}
          <br />({clubData.tla})
        </h2>
        <div>
          <MainButton
            text="Edit"
            onClick={() => {
              alert("Edit");
            }}
          />
          <MainButton
            text="Delete"
            onClick={() => {
              alert("Delete");
            }}
          />
        </div>
      </form>
    </div>
  );
}
