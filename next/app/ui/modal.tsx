"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

import { IDiv } from "@/types/jsx";

export function SingleModal({ ...rest }: IDiv) {
  const router = useRouter();
  const { onOpenChange } = useDisclosure();

  const handleClose = () => {
    router.back();
  };

  React.useEffect(() => {
    document.documentElement.dataset.modalOpen = "true";

    return () => {
      delete document.documentElement.dataset.modalOpen;
    };
  }, []);

  return (
    <Modal
      isOpen
      className="fixed"
      onClose={handleClose}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
        <ModalBody>{rest.children}</ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={() => handleClose()}>
            Close
          </Button>
          <Button color="primary" onPress={() => handleClose()}>
            Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
