import { z } from "zod"


export const PostValidator = z.object({
    mainCategory:z.string().nonempty('').min(4),
    title:z.string().nonempty('password must have at least 8 characters').min(3).max(80),
    category:z.string().nonempty(),
    description:z.string().nonempty(),
    email:z.string().nonempty(),
})