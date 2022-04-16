import { Routes, Route } from "react-router-dom";
import { Account } from "./pages/Account";
import { AdPage } from "./pages/Ad";
import { AddAd } from "./pages/AddNewAd";
import { CategoryPage } from "./pages/CategoryPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { RequireAuth } from "./requireAuth";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/account"
        element={
          <RequireAuth>
            <Account />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/newad"
        element={
          <RequireAuth>
            <AddAd />
          </RequireAuth>
        }
      ></Route>
      <Route path="/post-ad/:id" element={<AdPage />}></Route>
      <Route path="/category/" element={<CategoryPage />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
