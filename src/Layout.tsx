import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/components/layout.scss";
import { EmployeeContextProvider } from "./context/employeContext";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <EmployeeContextProvider>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </EmployeeContextProvider>
    </div>
  );
};

export default Layout;
