import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { FaPlay } from "react-icons/fa";

interface MovieModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  data: {
    title: string;
    homepage: string;
  };
}

const MovieModal: React.FC<MovieModalProps> = ({
  isOpen,
  onOpen,
  onOpenChange,
  data,
}) => {
  return (
    <>
      <Button onPress={onOpen}>
        Watch Trailer <FaPlay />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {data.title}
              </ModalHeader>
              <ModalBody>
                <iframe width={1024} height={700} src={data.homepage}></iframe>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default MovieModal;
