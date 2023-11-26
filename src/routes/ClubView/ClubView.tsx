import { useParams } from "react-router-dom";
import { Loading, Error } from "../../components";
import useViewClub from "../../hooks/useViewClub";
import { IClub } from "../../types/clubs";
export default function ClubView() {
  const { id } = useParams();
  const { data, loading, error } = useViewClub(Number(id));

  if (loading) return <Loading isDisplayed={loading} />;

  if (data) return <ClubViewContent club={data} />;

  if (error) return <Error error={error} />;
}

function ClubViewContent({ club }: { club: IClub }) {
  return (
    <div className="flex flex-col items-center">
      <div className="m-2 p-2">
        <ClubInformation clubData={club} />
        <ClubContact clubData={club} />
        <ClubImage clubData={club} />
      </div>
    </div>
  );
}

function ClubContact({ clubData }: { clubData: IClub }) {
  return (
    <div className="bg-mainGray m-4 p-4 rounded-lg ">
      <h3 className="text-mainRed font-bold text-xl md:text-2xl">Contact</h3>
      <ClubFieldInformation fieldName="Address" fieldValue={clubData.address} />
      <ClubFieldInformation fieldName="Website" fieldValue={clubData.website} />
      <ClubFieldInformation fieldName="Email" fieldValue={clubData.email} />
      <ClubFieldInformation fieldName="Phone" fieldValue={clubData.phone} />
    </div>
  );
}

function ClubInformation({ clubData }: { clubData: IClub }) {
  return (
    <div className="bg-mainGray m-4 p-4 rounded-lg ">
      <h3 className="text-mainRed font-bold text-xl md:text-2xl">
        Information
      </h3>
      <ClubFieldInformation fieldName="Club Name" fieldValue={clubData.name} />
      <ClubFieldInformation
        fieldName="Short Name"
        fieldValue={clubData.shortName}
      />
      <ClubFieldInformation fieldName="Country" fieldValue={clubData.country} />
      <ClubFieldInformation
        fieldName="Club Colors"
        fieldValue={clubData.clubColors}
      />
      <ClubFieldInformation fieldName="Founded" fieldValue={clubData.founded} />
      <ClubFieldInformation fieldName="Venue" fieldValue={clubData.venue} />
    </div>
  );
}

function ClubImage({ clubData }: { clubData: IClub }) {
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

type FieldInformation = {
  fieldName: string;
  fieldValue: string | number;
};
function ClubFieldInformation({ fieldName, fieldValue }: FieldInformation) {
  return (
    <p className="text-base text-mainWhite font-bold md:text-xl">
      {fieldName}: <span className="text-mainRed font-bold">{fieldValue}</span>
    </p>
  );
}

type MainButton = { text: string; onClick: () => void };
function MainButton({ text, onClick }: MainButton) {
  return (
    <button
      className="p-2 m-2 bg-mainRed text-mainWhite font-bold rounded text-base rounded bg-mainGray md:text-xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
