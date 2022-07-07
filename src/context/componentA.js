import React, { useContext } from "react";
import { UserContext } from './createContext';

function ComponentA() {
    const context = useContext(UserContext)
    console.log('ComponentA==>', context.data);
    return <div>
        <h3>ComponentA </h3>
    </div>
}
export default ComponentA;