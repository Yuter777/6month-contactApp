import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Voooy!</h1>
      <p>Kechirasiz, kutilmagan xatolik yuz berdi.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
