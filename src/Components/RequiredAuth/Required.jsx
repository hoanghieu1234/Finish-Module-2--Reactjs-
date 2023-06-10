import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequiredAdmin() {
    const [hasToken,setHasToken] = useState(JSON.parse(localStorage.getItem("users")))
    const location = useLocation();
        

    return(
        (hasToken && Number(hasToken.role) === 1) ? <Outlet/> : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default RequiredAdmin