import React, {useState} from 'react';
import api from "../api/api";

export const ItemContext = React.createContext(undefined)

const ItemsContextProvider = ({children}) => {

    const [itemData, setItemData] = useState([])

    // console.log('item data: ', itemData)

    return (
        <ItemContext.Provider value={itemData}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemsContextProvider;