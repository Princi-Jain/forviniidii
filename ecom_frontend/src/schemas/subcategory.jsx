import * as Yup from "yup";

export const subcategory = Yup.object({
    category_id:Yup.string().min(4).max(10).required("please enter your category_id"),
    sub_category_id:Yup.string().min(4).max(10).required("please enter your sub_category_id"),
    sub_category_name:Yup.string().min(3).max(100).required("please enter your name"),
    sub_category_image:Yup.string().required("please upload image")
})