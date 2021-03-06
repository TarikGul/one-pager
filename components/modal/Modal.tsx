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
    useToast
} from "@chakra-ui/core";

export const OnePagerModal = () => {
    const toast = useToast();
    const [isOpen, setIsOpen]: [boolean, any] = useState(true);

    const handleClose = () => {
        Router.push('/');
    }

    const initializePayment = () => {
        const localStorage = window.localStorage;
        localStorage.setItem('member', JSON.stringify(true));

        toast({
            title: "Payment Received.",
            description: "We've received your payment. Thank you",
            status: "success",
            duration: 9000,
            isClosable: true,
        })

        setIsOpen(!isOpen);
    }

    return (
        <>
            {
                isOpen ? (
                    <Modal isOpen={true} onClose={() => handleClose()} >
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
                                <Button variant="ghost" onClick={() => initializePayment()} >
                                    Pay
                                </Button>
                                <Button variantColor="blue"
                                    mr={3}
                                    onClick={() => handleClose()}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                ) : (
                    null
                )
            }
            
        </>
    )
}
