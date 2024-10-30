import React, { useActionState } from "react";
import * as reactHookForm from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";

import { cn } from "@/lib/utils";
import { createUser } from "@/lib/actions/login";

const schema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(1, "Usuário é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type ProfileFormData = z.infer<typeof schema>;

const initialState = {
  message: "",
};

export default function LoginForm({ className }: React.ComponentProps<"form">) {
  const [, formAction, pending] = useActionState(createUser, initialState);

  const {
    register,
    formState: { errors },
  } = reactHookForm.useForm<ProfileFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      action={formAction}
      className={cn("grid items-start gap-6", className)}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="grid h-full gap-1">
            <label htmlFor="email">Email</label>
            <Input
              classNames={{
                inputWrapper: cn(
                  "border border-transparent transition-all",
                  errors.email && "border-red-500",
                ),
              }}
              id="email"
              {...register("email")}
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="grid h-full gap-1">
            <label htmlFor="name">Usuário</label>
            <Input
              classNames={{
                inputWrapper: cn(
                  "border border-transparent transition-all",
                  errors.name && "border-red-500",
                ),
              }}
              id="name"
              {...register("name")}
              type="text"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid h-full gap-1">
            <label htmlFor="password">Senha</label>
            <Input
              classNames={{
                inputWrapper: cn(
                  "border border-transparent transition-all",
                  errors.password && "border-red-500",
                ),
              }}
              id="password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <Button
          className="text-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-20"
          type="submit"
        >
          {pending ? "Carregando ..." : "Finalizar cadastro"}
        </Button>
      </div>

      <p>
        Já tenho uma conta ?{" "}
        <Link
          className="text-sm text-accent-500 text-primary font-bold"
          href="/login"
        >
          Faça login
        </Link>
      </p>
    </form>
  );
}
