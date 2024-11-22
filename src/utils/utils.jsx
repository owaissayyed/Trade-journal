import {toast} from 'react-toastify';

export const handleSuccess = (msg) => {
    console.log("Success message:", msg); // This should log your error message
    toast.success(msg, {
        position: "top-right",
    });
};


export const handleError = (msg) => {
    console.log("Error message:", msg); // This should log your error message
    toast.error(msg, {
        position: "top-right",
    });
};
