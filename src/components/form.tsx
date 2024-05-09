import { formSchema } from "@/utils/validationSchema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import { z } from "zod";
import { ReactNode, useRef } from "react";
import { toast } from "sonner";

type FormDataSchema = z.infer<typeof formSchema>

const Form = ({children}: {children: ReactNode}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDataSchema>({
        resolver: zodResolver(formSchema),
    })

    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmitClick = (data: FormDataSchema) => {
        //console apenas para debug
        console.log(data)
        
        reset()
        toast.success('Enviado com sucesso!')
    }

    return ( 
        <div>
            {children}
            <form ref={formRef} onSubmit={handleSubmit(handleSubmitClick)} className="space-y-6">
                <div>
                    <Input
                        className="text-sm bg-transparent border-primary font-sans text-white placeholder:text-primary-foreground placeholder:font-sans lg:placeholder:text-[20px] xl:h-14 xl:text-[20px]"
                        placeholder="Nome"
                        {...register('name')}
                        autoFocus
                    />
                    {
                        errors.name && 
                        <span className="pt-1 text-xs block h-fit text-destructive text-left lg:text-sm">
                            {errors.name.message}
                        </span>
                    }
                </div>

                <div>
                    <Input
                        className="bg-transparent border-primary font-sans text-white placeholder:text-primary-foreground placeholder:font-sans lg:placeholder:text-[20px] xl:h-14 xl:text-[20px]"
                        placeholder="E-mail"
                        { ...register('email') }
                    />
                    {
                        errors.email &&
                        <span className="pt-1 text-xs block h-fit text-destructive text-left lg:text-sm">
                            {errors.email.message}
                        </span>
                    }
                </div>

                <div>
                    <Input
                        className="bg-transparent border-primary font-sans text-white placeholder:text-primary-foreground placeholder:font-sans lg:placeholder:text-[20px] xl:h-14 xl:text-[20px]"
                        placeholder="Assunto"
                        {...register('subject')}
                    />
                    {
                        errors.subject && 
                        <span className="pt-1 text-xs block h-fit text-destructive text-left lg:text-sm">
                            {errors.subject.message}
                        </span>
                    }
                </div>

                <div>
                    <Textarea
                        className="bg-transparent border-primary font-sans text-white min-h-52 placeholder:text-primary-foreground placeholder:font-sans lg:placeholder:text-[20px] xl:text-[20px]"
                        placeholder="Mensagem"
                        {...register('content')}
                    />
                    {
                        errors.content && 
                        <span className="pt-1 text-xs block h-fit text-destructive text-left lg:text-sm">
                            {errors.content.message}
                        </span>
                    }
                </div>

                <Button className=" text-xl h-12 w-full text-white font-sans hover:bg-[#D97F6F]" type="submit">
                    Enviar
                </Button>
            </form>
        </div>
     );
}
 
export default Form;