import React from "react";
import { supabase } from "../supabaseClient";
import Account from "./Account";

type Props = {};

const Home = (props: Props) => {
  const [session, setSession] = React.useState<null | any>(null);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container">
      <Account session={session} />
    </div>
  );
};

export default Home;
