



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { successToast, errorToast } from "../../../functions/messages.js";
import Loader from "../../../components/loader.jsx";
import { useParams, useNavigate } from 'react-router-dom'
import apis from '../../Config.js';


const ActivateAcoount = () => {
    const [loader, setLoader] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        token && activateAccount();
    }, [token])

    const activateAccount = async () => {
        try {
            setLoader(true);
         const {data} = await axios.post(`${apis.auth}/signup`, {token});
         if (data?.ok) {
             successToast("Account has been created successfully");
             navigate("/dashboard");
             setLoader(false);
         } else {
             errorToast(data.error);
             setLoader(false);
         }
        } catch (err) {
            console.log();
        }
    }

   
  return (
    <div className='bg-gray-900'>
     {loader} ? <Loader/>
    </div>
  )
}

export default ActivateAcoount
