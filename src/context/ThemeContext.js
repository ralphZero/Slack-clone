import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [state, setState] = useState(
        {
            isLightTheme: true,
            light: {
                headerColor: '#361D37',
                sideColor: '#3F0E40',
                chatBackground: '#FFFFFF',
                chatColor: '#030303'
            },
            dark: {
                headerColor: '#284CA8',
                sideColor: '#19171D',
                chatBackground: '#1A1D21',
                chatColor: '#80808080'
            }
        }
    );


    const toggleTheme = () => {
        // setState({ isLightTheme: !state.isLightTheme });
        setState({
            ...state,
            isLightTheme: !state.isLightTheme
        });
        console.log('state', state);
    }
    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>
            { props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
