import { Home } from "./Home";



export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
      return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("nutshell_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
    }
  
    return (
      <>
        <Routes>
          <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
          <Route exact path="/register" element={<Register />} />
          
          <Route exact path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          
        </Routes>
      </>
    )
  }