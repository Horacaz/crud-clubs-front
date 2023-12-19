import { Link } from "react-router-dom";
import { UseFormRegister, useForm } from "react-hook-form";
import { IFormData } from "../../types/clubs";
import useClubAdd from "../../hooks/useClubAdd";
import { Loading, Error } from "../../components";

export default function ClubAdd() {
  const { addClub, state } = useClubAdd();
  const { data, loading, error } = state;
  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit = handleSubmit((data) => addClub(data));

  if (data?.status === "200") return <ClubSuccesfullyAdded />;
  if (loading) return <Loading isDisplayed={loading} />;
  if (error)
    return (
      <Error
        error={
          error || ({ message: "Component could not be rendered." } as Error)
        }
      />
    );

  return <ClubAddForm onSubmit={onSubmit} register={register} />;
}

type ClubAddForm = {
  onSubmit: () => void;
  register: UseFormRegister<IFormData>;
};
function ClubAddForm(props: ClubAddForm) {
  const { onSubmit, register } = props;
  return (
    <div className="flex flex-col p-4 m-auto md:max-w-h">
      <h2 className="text-mainWhite font-bold text-xl text-center md:text-2xl">
        Create a <span className="text-mainRed">New Club</span>
      </h2>
      <form
        className="m-2 p-2 bg-mainGray flex flex-col rounded"
        onSubmit={onSubmit}
      >
        <FormInput register={register} name="name" text="Club Name" />
        <FormInput register={register} name="shortName" text="Short Name" />
        <FormInput register={register} name="tla" text="TLA" />
        <FormInput register={register} name="country" text="Country" />
        <FormInput register={register} name="clubColors" text="Club Colors" />
        <FormInput register={register} name="founded" text="Founded" />
        <FormInput register={register} name="venue" text="Venue" />
        <FormInput register={register} name="address" text="Address" />
        <FormInput register={register} name="website" text="Website" />
        <FormInput register={register} name="email" text="Email" />
        <FormInput register={register} name="phone" text="Phone" />
        <FormCrestImageInput register={register} />
        <SubmitButton />
      </form>
    </div>
  );
}

type FormInputProps = {
  register: UseFormRegister<IFormData>;
  name: keyof IFormData;
  text: string;
};

function FormInput(props: FormInputProps) {
  return (
    <label
      className="flex flex-col text-mainWhite font-bold text-sm m-1 p-1 md:text-base"
      htmlFor={props.name}
    >
      {props.text}
      <input
        {...props.register(props.name)}
        type="text"
        className="outline-none text-mainRed font-bold bg-mainBlack m-1 p-1"
        name={props.name}
        id={props.name}
        required
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

function ClubSuccesfullyAdded() {
  return (
    <div className="m-auto p-2 flex">
      <div className="m-auto p-8 bg-mainGray rounded flex flex-col text-center md:p-2">
        <h2 className="text-mainWhite font-bold text-base md:text-2xl">
          Club successfully added!
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
