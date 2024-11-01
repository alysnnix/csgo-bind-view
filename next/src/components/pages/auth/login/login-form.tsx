"use client";

import React, { useActionState } from "react";
import * as reactHookForm from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input } from "@nextui-org/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { loginAction } from "@/lib/auth/login";

const schema = z.object({
  username: z.string().min(1, "Usuário é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type ProfileFormData = z.infer<typeof schema>;

const initialState: ActionState = {
  message: "",
  status: "",
  data: {
    username: "",
    password: "",
  },
};

type ActionState = {
  message: string;
  data: ProfileFormData;
  status: "success" | "error" | "";
};

interface Props extends React.ComponentProps<"form"> {
  closeModal?: () => void;
}

export default function LoginForm({ closeModal, className }: Props) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  const {
    register,
    formState: { errors },
  } = reactHookForm.useForm<ProfileFormData>({
    resolver: zodResolver(schema),
  });

  React.useEffect(() => {
    if (!pending) {
      if (state?.message) toast(state?.message);

      if (state?.status === "success") {
        router.push("/" + state?.data?.username);
        if (closeModal) closeModal();
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
            <label htmlFor="name">Usuário</label>
            <Input
              classNames={{
                inputWrapper: cn(
                  "border border-transparent transition-all",
                  errors.username && "border-red-500",
                ),
              }}
              defaultValue={state?.data?.username || ""}
              {...register("username")}
              type="text"
            />
            {errors?.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
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
          {pending ? "Carregando ..." : "Fazer login"}
        </Button>
      </div>
    </form>
  );
}
