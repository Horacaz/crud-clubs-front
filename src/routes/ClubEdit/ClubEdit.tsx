import { useParams, Link } from "react-router-dom";
import { UseFormRegister, useForm } from "react-hook-form";
import { IFormData, IClub } from "../../types/clubs";
import { Loading, Error } from "../../components";
import question from "../../../assets/question.png";
import useClubEdit from "../../hooks/useClubEdit";
import useViewClub from "../../hooks/useViewClub";

type FormInputProps = {
  register: UseFormRegister<IFormData>;
  type: string;
  name: keyof IFormData;
  id: keyof IFormData;
  text: string;
  placeholder: string;
};
export default function ClubEdit() {
  const { id } = useParams();
  const clubId = Number(id);
  const { data, loading, error } = useViewClub(clubId);
  const { editClub, state } = useClubEdit();
  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit = handleSubmit((data) => editClub(clubId, data));

  if (state.data?.status === "200") return <ClubSuccesfullyEdited />;
  if (!Array.isArray(data) && data)
    return <EditForm onSubmit={onSubmit} register={register} club={data} />;
  if (error) return <Error error={error} />;
  if (loading) return <Loading isDisplayed={loading} />;
}

type EditForm = {
  onSubmit: () => void;
  register: UseFormRegister<IFormData>;
  club: IClub;
};

function EditForm({ onSubmit, register, club }: EditForm) {
  return (
    <div className="flex flex-col p-4 m-auto md:max-w-h">
      <h2 className="text-mainWhite font-bold text-xl text-center md:text-2xl">
        Editing
      </h2>
      <h3 className="font-bold text-xl text-center md:text-2xl text-mainRed">
        {club.name}
      </h3>
      <ClubImage crestSrc={club.crestSrc} />
      <form
        className="m-2 p-2 bg-mainGray flex flex-col rounded"
        onSubmit={onSubmit}
      >
        <FormInput
          register={register}
          placeholder={club.name}
          type="text"
          name="name"
          id="name"
          text="Club Name"
        />
        <FormInput
          register={register}
          placeholder={club.shortName}
          type="text"
          name="shortName"
          id="shortName"
          text="Short Name"
        />
        <FormInput
          register={register}
          placeholder={club.tla}
          type="text"
          name="tla"
          id="tla"
          text="TLA"
        />
        <FormInput
          register={register}
          placeholder={club.country}
          type="text"
          name="country"
          id="country"
          text="Country"
        />
        <FormInput
          register={register}
          placeholder={club.clubColors}
          type="text"
          name="clubColors"
          id="clubColors"
          text="Club Colors"
        />
        <FormInput
          register={register}
          placeholder={club.founded.toString()}
          type="text"
          name="founded"
          id="founded"
          text="Founded"
        />
        <FormInput
          register={register}
          placeholder={club.venue}
          type="text"
          name="venue"
          id="venue"
          text="Venue"
        />
        <FormInput
          register={register}
          placeholder={club.address}
          type="text"
          name="address"
          id="address"
          text="Address"
        />
        <FormInput
          register={register}
          placeholder={club.website}
          type="text"
          name="website"
          id="website"
          text="Website"
        />
        <FormInput
          register={register}
          placeholder={club.email}
          type="text"
          name="email"
          id="email"
          text="Email"
        />
        <FormInput
          register={register}
          placeholder={club.phone}
          type="text"
          name="phone"
          id="phone"
          text="Phone"
        />
        <FormCrestImageInput register={register} />
        <SubmitButton />
      </form>
    </div>
  );
}

function FormInput(props: FormInputProps) {
  return (
    <label
      className="flex flex-col text-mainWhite font-bold text-sm m-1 p-1 md:text-base"
      htmlFor={props.name}
    >
      {props.text}
      <input
        placeholder={props.placeholder}
        {...props.register(props.name)}
        type={props.type}
        className="outline-none text-mainRed font-bold bg-mainBlack m-1 p-1"
        name={props.name}
        id={props.id}
      />
    </label>
  );
}

function FormCrestImageInput(props: { register: UseFormRegister<IFormData> }) {
  return (
    <label
      className="flex flex-col text-mainWhite font-bold text-sm m-1 p-1 md:text-base"
      htmlFor="crest"
    >
      Crest
      <input
        {...props.register("crest")}
        type="file"
        className="outline-none text-mainRed font-bold bg-mainBlack m-1 p-1"
        name="crest"
        id="crest"
        accept=".png, .jpg, .jpeg, .svg"
      />
    </label>
  );
}

function ClubImage({ crestSrc }: { crestSrc: string }) {
  return (
    <img
      src={crestSrc || question}
      className="m-2 p-2 rounded max-w-h justify-center m-auto"
    />
  );
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="m-2 p-1 bg-mainRed text-mainWhite font-bold rounded text-base rounded bg-mainGray md:text-xl md:p-2"
    >
      Submit
    </button>
  );
}

function ClubSuccesfullyEdited() {
  return (
    <div className="m-auto p-2 flex">
      <div className="m-auto p-8 bg-mainGray rounded flex flex-col text-center md:p-2">
        <h2 className="text-mainWhite font-bold text-base md:text-2xl">
          Club successfully edited!
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
