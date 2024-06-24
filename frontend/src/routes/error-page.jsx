import { useRouteError } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div id="error-page" className="error-page">
        <div className="errors">
          <h1>
            <i className="status">{error.status}</i>
          </h1>
          <p>
            <i className="statustext">{error.statusText}</i>
          </p>
        </div>

        <a href={`/`}>Retourner sur la page d'accueil</a>
      </div>
      <Sidebar />
    </>
  );
}
