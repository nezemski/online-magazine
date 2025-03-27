import { Route, Routes } from "react-router";
import Shop from "../pages/Shop";
import { authRoutes, publicRoutes } from "../utils/routes";
import { useContext } from "react";
import { AppContext } from "../context";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(AppContext);

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
});

export default AppRouter;
