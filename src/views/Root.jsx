import { Outlet } from "react-router-dom";
import HedaderView from "./HedaderView";
import AsideView from "./AsideView";
import { FooterView } from "./FooterView";


const RootView = () => {
  return (
    <>
      <HedaderView />
      <main >
        <aside >
          <AsideView />
        </aside>
        <div className="justify-content-center">
          
          <Outlet />
        </div>
      </main>
      <FooterView />
    </>
  );
};
export default RootView;
