// Getting data about the current route

import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
 const params = useParams()
 // access and update query string params
 const [searchParams, setSearchParams] = useSearchParams()

 // access current location
 const location = useLocation()

 
    return <p>User {params.id}</p>;
  };
  
  export default UserDetail;