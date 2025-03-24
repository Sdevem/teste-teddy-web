import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";

const PageBase: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default PageBase;
