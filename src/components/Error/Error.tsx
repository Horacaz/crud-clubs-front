import { Link } from "react-router-dom";
export default function Error(props: { error: Error }) {
  const { error } = props;
  return (
    <div className="m-auto p-2 flex">
      <div className="m-auto p-8 bg-mainGray rounded flex flex-col text-center md:p-2">
        <h2 className="text-mainWhite font-bold text-base md:text-2xl">
          An error has occurred.
        </h2>
        <h3 className="text-mainWhite font-bold text-base md:text-2xl">
          {error.message}
        </h3>
        <Link to="/">
          <button className="m-2 p-1 bg-mainRed text-mainWhite font-bold rounded text-base rounded bg-mainGray md:text-xl md:p-2">
            Return to Club List
          </button>
        </Link>
      </div>
    </div>
  );
}
