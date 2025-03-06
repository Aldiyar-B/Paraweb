import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default PublicLayout;
