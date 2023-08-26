import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="text-center font-bold text-lg md:text-2xl p-2">
      <Link to="/">
        <h1 className="text-mainRed">Football Clubs</h1>
        <p className="text-mainWhite">(Create, Read, Update, Delete)</p>
      </Link>
    </div>
  );
}
