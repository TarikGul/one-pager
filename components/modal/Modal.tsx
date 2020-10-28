import React, { useState } from 'react';
import Router from 'next/router';

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/core";

export const OnePagerModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClose = () => {
        Router.push('/');
    }

    return (
        <>
            <Modal isOpen={true} onClose={() => (handleClose())}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Get Access Now!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        As a free user, you only have access to 2 One Pagers.
                        Click Pay below in order to get access. If you would like 
                        to wait you can still access the first 2 One Pagers you clicked on.
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost">Pay</Button>
                        <Button variantColor="blue" mr={3} onClick={() => handleClose()}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}