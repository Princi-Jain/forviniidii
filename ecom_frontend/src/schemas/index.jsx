import * as Yup from "yup";

export const schema = Yup.object({
    id:Yup.string().min(4).max(4).required("please enter your id"),
    name:Yup.string().max(40).required("please enter your name"),
    password:Yup.string().min(8).max(200).required("please enter your password")
})