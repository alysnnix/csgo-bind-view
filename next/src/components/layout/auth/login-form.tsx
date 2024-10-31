"use client";

import React, { useActionState } from "react";
import * as reactHookForm from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { createUser } from "@/lib/actions/login";

const schema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(1, "Usuário é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type ProfileFormData = z.infer<typeof schema>;

const initialState: ActionState = {
  message: "",
  data: {
    name: "",
    email: "",
    password: "",
  },
  status: "",
};

type ActionState = {
  message: string;
  data: ProfileFormData;
  status: "success" | "error" | "";
};

export default function LoginForm({ className }: React.ComponentProps<"form">) {
  const [state, formAction, pending] = useActionState(createUser, initialState);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    setValue,
  } = reactHookForm.useForm<ProfileFormData>({
    resolver: zodResolver(schema),
  });

  React.useEffect(() => {
    if (!pending) {
      if (state?.data) {
        setValue("name", state?.data?.name);
        setValue("email", state?.data?.email);
        setValue("password", state?.data?.password);
      }

      if (state?.message) toast(state?.message);

      if (state?.status === "success") {
        router.push("/login");
      }
    }
  }, [pending]);

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
              defaultValue={state?.data?.email || ""}
              id="email"
              {...register("email")}
              type="email"
            />
            {errors?.email && (
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
              defaultValue={state?.data?.name || ""}
              {...register("name")}
              type="text"
            />
            {errors?.name && (
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
              defaultValue={state?.data?.password || ""}
              id="password"
              type="password"
              {...register("password")}
            />
            {errors?.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <Button
          className="text-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-20"
          disabled={pending}
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
