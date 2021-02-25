import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {

    const [state, setState] = useState({
        addChannel: false
    });

    const toggleModal = (tag) => setState({
        ...state,
        [tag]: !state[tag]
    });

    return (
        <ModalContext.Provider value={{state, toggleModal}}>
            { props.children }
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;
