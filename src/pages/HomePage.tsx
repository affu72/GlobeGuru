import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function HomePage() {
  return (
    <div>
      <PageNav></PageNav>
      <h1>GlobGuru</h1>
      <NavLink to={'/app'}>Go to app</NavLink>
    </div>
  );
}
