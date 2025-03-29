import { useState } from "react";
import CustomModal from "./CustomModal";

const CustomModalTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <CustomModal modalTitle={'Modal'} modalContent={"This is the sample Text"} modalFooter={'This is modal Footer'}/>}
    </>
  );
};
export default CustomModalTest;
