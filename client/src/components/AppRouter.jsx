import { Route, Routes } from "react-router";
import Shop from "../pages/Shop";
import { authRoutes, publicRoutes } from "../routes";
import { useContext } from "react";
import { AppContext } from "../context";

const AppRouter = () => {
  const { user } = useContext(AppContext);
  console.log(user);

  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={Component} exact />;
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={Component} exact />;
      })}
      <Route path="*" element={<Shop />} />
    </Routes>
  );
};

export default AppRouter;
