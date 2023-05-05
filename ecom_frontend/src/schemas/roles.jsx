import * as Yup from "yup";

export const roles = Yup.object({
    roleid:Yup.string().max(3).required("please enter your roleid"),
    rolename:Yup.string().max(16).required("please enter your name")
})