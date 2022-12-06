import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import Login from "./screens/Login";
import { supabase } from "./supabaseClient";

function App() {
  const [session, setSession] = React.useState<null | any>(null);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {session ? (
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          ) : (
            <Route path="/" element={<Outlet />}>
              <Route index element={<Navigate to="login" />} />
              <Route path="login" element={<Login />} />
            </Route>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
