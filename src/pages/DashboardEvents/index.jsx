import {
  Container,
  ContainerHeader,
  TabButton,
  EventTitle,
  Content,
  MainButton,
} from "./styles";

import { FaClipboardList, FaUserFriends } from "react-icons/fa";

import { useState } from "react";

import ProductList from "../../components/productList";
import GuestList from "../../components/guestList";
import Header from "../../components/header";

const DashboardEvents = () => {
  const [productsTab, setProductsTab] = useState(true);
  const switchTabs = () => setProductsTab(!productsTab);

  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <TabButton active={productsTab} onClick={() => switchTabs()}>
            <p>
              <FaClipboardList />
            </p>
          </TabButton>
          <TabButton active={!productsTab} onClick={() => switchTabs()}>
            <p>
              <FaUserFriends />
            </p>
          </TabButton>
        </ContainerHeader>
        <EventTitle children={"Casamento do Yorran"} />
        <Content children={productsTab ? <ProductList /> : <GuestList />} />
        <MainButton
          onClick={() => console.log("modal da divisao")}
          children={"Marcar!"}
        />
      </Container>
    </>
  );
};

export default DashboardEvents;
