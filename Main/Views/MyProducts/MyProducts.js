import React, { useState } from "react";
import Background from "../../Reusables/Background/Background";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Color } from "../../Defaults/Color";
import Nav from "../../Reusables/Nav/Nav";
import { TopView } from "../../Reusables/Nav/TopView";
import { IconContainer } from "../../Reusables/Nav/IconContainer";
import TitleNav from "../../Reusables/Nav/TitleNav";
import Logo from "../../Reusables/Logo/Logo";
import SearchBar from "../../Reusables/SearchBar";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import ListMyProducts from "./ListMyProducts/ListMyProducts";
import OrderBy from "./OrderBy/OrderBy";
import MaxWidthContainer from "../../Reusables/MaxWidthContainer";
import Modal from "../../Reusables/Modal/Modal";
import { UserProducts } from "../../Store/UserProducts";

export default function MyProducts() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [comfirmDeleteID, setComfirmDeleteID] = useState(null);

  function backToHomeHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  function getSearchQuery(query) {
    setQuery(query);
  }

  function liftOrderState(order) {
    setOrder(order);
  }

  function closeModal() {
    setModalOpen(false);
  }
  function openModal(action, id) {
    if (action === "onZeroUnids") {
      setModalMessage(
        "By setting the stock as 0, the listing will be deleted, are you sure?"
      );
    }
    if (action === "onDelete") {
      setModalMessage("Do you really want to delete this listing?");
    }
    setComfirmDeleteID(id);

    setModalOpen(true);
  }
  function confimDelete() {
    dispatch(UserProducts.actions.removeProduct(comfirmDeleteID));
    setModalOpen(false);
  }

  const functionActions = {
    closeModal,
    confimDelete,
  };

  return (
    <Background>
      <Modal
        message={modalMessage}
        parentFunctions={functionActions}
        visible={modalOpen}
      ></Modal>
      <MaxWidthContainer>
        <Nav>
          <TopView>
            <IconContainer onPress={backToHomeHandler}>
              <FontAwesome
                name="angle-left"
                size={35}
                color={Color.black}
              ></FontAwesome>
            </IconContainer>
            <TitleNav>My Products</TitleNav>
            <Logo />
          </TopView>
          <SearchBar
            placeholder="Search by name"
            parentLiftText={getSearchQuery}
          />
        </Nav>
        <OrderBy liftOrderState={liftOrderState}></OrderBy>

        <ListMyProducts showModal={openModal} order={order} query={query} />
      </MaxWidthContainer>
    </Background>
  );
}
