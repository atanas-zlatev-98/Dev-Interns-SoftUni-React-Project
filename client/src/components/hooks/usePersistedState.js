import { useState } from "react"

export const usePersistedState = (key,initialState) =>{

     const [state,setState] = useState(()=>{
        const auth = localStorage.getItem(key);

        if(!auth){
            return  typeof initialState === 'function' ? initialState() : initialState;
        }

        const authData = JSON.parse(auth);

        return authData;
     });

     const updateState = (value) => {
        const newState = typeof value === 'function' ? value(state) : value;

        if(newState === null || newState === undefined) {
            localStorage.removeItem(key);
        }else {
            localStorage.setItem(key,JSON.stringify(newState));

        }

      
        setState(newState);
     }


     return [state,updateState];
}