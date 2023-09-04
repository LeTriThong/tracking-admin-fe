import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation, Navigate } from 'react-router-dom';


// export { PrivateRoute };

function RequireAuth({ children }) {
    const isAuthenticated = useSelector(state => state.demoAnotherSlice.isAuthenticated);
    const location = useLocation();

    // const { authed } = useSelector();

    return isAuthenticated === true ? children : <Navigate to="/login" replace state={{path: location.pathname}} />;
}

export default RequireAuth;

// function PrivateRoute({component, ...rest }) {
//     const isAuthenticated = useSelector(state => state.isAuthenticated);
//     return (
//         <Route {...rest} render={props => {
//             if (!{isAuthenticated}) {
//                 // not logged in so redirect to login page with the return url
//                 return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//             }

//             // authorized so return component
//             return <Component {...props} />
//         }} />
//     );
// }