import { AuthModal } from "@/components/pages/auth/auth-modal";
import SignupForm from "@/components/pages/auth/signup/signup-form";

export default function Page() {
  return (
    <AuthModal
      description="Faça seu cadastro para salvar suas próprias configurações de binds
              e personalizar sua experiência de jogo ao máximo. Com uma conta,
              você poderá acessar suas configurações de qualquer lugar e nunca
              perder suas preferências!"
      title="Faça seu cadastro"
    >
      <SignupForm />
    </AuthModal>
  );
}
