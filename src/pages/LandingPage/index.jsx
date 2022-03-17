import Header from "../../components/header";
import LpStack1 from "../../components/lpstack1";
import Stack2 from "../../components/stack2";
import FormAddItem from "../../components/formAddItem";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <LpStack1 />
        <FormAddItem />
        <Stack2 />
      </main>
    </>
  );
};

export default LandingPage;
