import { formSchema } from "@/utils/validationSchema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import { z } from "zod";
import { ReactNode } from "react";

type FormDataSchema = z.infer<typeof formSchema>

const Form = ({children}: {children: ReactNode}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataSchema>({
        resolver: zodResolver(formSchema),
    })

    const handleSubmitClick = (data: FormDataSchema) => {
        console.log(data)
    }

    return ( 
        <div>
            {children}
            <form onSubmit={handleSubmit(handleSubmitClick)} className="space-y-6">
                <div>
                    <Input
                        className="bg-transparent border-primary font-sans text-white placeholder:text-primary-foreground placeholder:font-sans placeholder:text-[20px] xl:h-14"
                        placeholder="Nome"
                        {...register('name')}
                    />
                    {
                        errors.name && 
                        <span className="pt-1 text-xs block h-fit text-destructive text-left">
                            {errors.name.message}
                        </span>
                    }
                </div>

                <div>
                    <Input
                        className="bg-transparent border-primary font-sans text-white placeholder:text-primary-foreground placeholder:font-sans placeholder:text-[20px] xl:h-14"
                        placeholder="E-mail"
                        { ...register('email') }
                    />
                    {
                        errors.email &&
                        <span className="pt-1 text-xs block h-fit text-destructive text-left">
                            {errors.email.message}
                        </span>
                    }
                </div>

                <div>
                    <Input
                        className="bg-transparent border-primary font-sans text-white placeholder:text-primary-foreground placeholder:font-sans placeholder:text-[20px] xl:h-14"
                        placeholder="Assunto"
                        {...register('subject')}
                    />
                    {
                        errors.subject && 
                        <span className="pt-1 text-xs block h-fit text-destructive text-left">
                            {errors.subject.message}
                        </span>
                    }
                </div>

                <div>
                    <Textarea
                        className="bg-transparent border-primary font-sans text-white min-h-52 placeholder:text-primary-foreground placeholder:font-sans placeholder:text-[20px]"
                        placeholder="Mensagem"
                        {...register('content')}
                    />
                    {
                        errors.content && 
                        <span className="pt-1 text-xs block h-fit text-destructive text-left">
                            {errors.content.message}
                        </span>
                    }
                </div>

                <Button className=" text-xl h-12 w-full text-white font-sans" type="submit">
                    Enviar
                </Button>
            </form>
        </div>
     );
}
 
export default Form;