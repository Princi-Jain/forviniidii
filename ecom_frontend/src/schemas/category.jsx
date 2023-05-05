import * as Yup from "yup";

export const category = Yup.object({
    category_id:Yup.string().min(4).max(10).required("please enter your category_id"),
    category_name:Yup.string().max(40).required("please enter your category_name"),
    category_image:Yup.string().max(100).required("please upload image"),
    gst:Yup.number().required("please add gst")
})