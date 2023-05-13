'use client';

import { createContext, useContext, useState } from "react";

const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
    const [color, setColor] = useState('red');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <AppContext.Provider value={{ color, setColor, menuOpen, setMenuOpen }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext);