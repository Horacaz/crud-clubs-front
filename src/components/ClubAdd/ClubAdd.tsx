import { UseFormRegister, useForm } from "react-hook-form";
import { IFormData } from "../../types/clubs";
import useClubAdd from "../../hooks/useClubAdd";

type FormInputProps = {
  register: UseFormRegister<IFormData>;
  type: string;
  name: keyof IFormData;
  id: keyof IFormData;
  text: string;
};
export default function ClubAdd() {
  const { addClub } = useClubAdd();
  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit = handleSubmit((data) => addClub(data));

  return (
    <div className="flex flex-col p-4 m-auto md:max-w-h">
      <h2 className="text-mainWhite font-bold text-xl text-center md:text-2xl">
        Create a <span className="text-mainRed">New Club</span>
      </h2>
      <form
        className="m-2 p-2 bg-mainGray flex flex-col rounded"
        onSubmit={onSubmit}
      >
        <FormInput
          register={register}
          type="text"
          name="clubName"
          id="clubName"
          text="Club Name"
        />
        <FormInput
          register={register}
          type="text"
          name="shortName"
          id="shortName"
          text="Short Name"
        />
        <FormInput
          register={register}
          type="text"
          name="tla"
          id="tla"
          text="TLA"
        />
        <FormInput
          register={register}
          type="text"
          name="country"
          id="country"
          text="Country"
        />
        <FormInput
          register={register}
          type="text"
          name="clubColors"
          id="clubColors"
          text="Club Colors"
        />
        <FormInput
          register={register}
          type="text"
          name="founded"
          id="founded"
          text="Founded"
        />
        <FormInput
          register={register}
          type="text"
          name="venue"
          id="venue"
          text="Venue"
        />
        <FormInput
          register={register}
          type="text"
          name="address"
          id="address"
          text="Address"
        />
        <FormInput
          register={register}
          type="text"
          name="website"
          id="website"
          text="Website"
        />
        <FormInput
          register={register}
          type="text"
          name="email"
          id="email"
          text="Email"
        />
        <FormInput
          register={register}
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
