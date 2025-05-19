import { toast } from "react-toastify";

export const handleSuccess = (mes) => {
    toast.success(mes, {
        position: 'top-right'
    })
}

export const handleError = (mes) => {
    toast.error(mes, {
        position: 'top-right'
    })
}
