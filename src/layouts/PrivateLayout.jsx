import { Outlet } from "react-router-dom";

function PrivateLayout() {
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

export default PrivateLayout;
