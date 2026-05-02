import { useRouteError } from "react-router-dom";

function Error() {
  const errorDetails = useRouteError();
  return (
    <div>
      <h2>Error aagya</h2>
      <h3>Udayan is gay</h3>
      <h4>
        {errorDetails.status} : {errorDetails.statusText}
      </h4>
    </div>
  );
}

export default Error;
