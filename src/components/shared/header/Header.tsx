import { ActionBar } from "./action-bar"
import { BreadCrumb } from "./bread-crumb";
import { MainNavBar } from "./main-nav-bar";

export const Header = () => {
    return (
      <>
        <ActionBar />
        <MainNavBar />
        <BreadCrumb />
      </>
    );
}