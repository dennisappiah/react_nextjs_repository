import { useRouteError } from "react-router-dom";



const ErrorPage = () => {
  const error = useRouteError()

  // log error with a logging service
  console.log(error)
    return (
      <>
        <h1>Oops...</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </>
    );
  };
  
  export default ErrorPage;