import { z } from "zod";

export const formSchema = z.object({
    name: z.string()
        .max(200, {message: "O campo nome deve ter no máximo 200 caracteres!"})
        .min(3, { message: "O campo nome deve ter no mínimo 3 caracteres!"}),
    email: z.string()
        .email({ message: "O campo e-mail deve ser um e-mail válido!"}),
    subject: z.string()
        .max(100, { message: "O campo assunto deve ter no máximo 100 caracteres!"})
        .min(1, { message: "Campo obrigatório!"}),
    content: z.string()
        .max(2000, { message: "O campo mensagem deve ter no máximo 2000 caracteres!"})
        .min(1, { message: "Campo obrigatório!"}),
})