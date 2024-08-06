import { useEffect, useState } from "react"

export const useForm = (initialValues,submitCallback) => {
    const [values,setValues] = useState(initialValues);

    useEffect(() =>{
        setValues(initialValues);
    },[])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitHandler = async (e) => {

        e.preventDefault();

        await submitCallback(values);
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        submitHandler,
        setValues
    }
}