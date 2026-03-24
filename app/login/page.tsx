import Image from "next/image";
import { Button } from "../_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const {userId} = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-screen grid-cols-2">
      {/* ESQUERDA */}
      <div className="flex h-full items-center justify-center bg-[#0B0B0D] p-8">
        <div className="flex max-w-[550px] flex-col">
          <Image src="/finance.ai.png" alt="Logo" width={173} height={39} className="mb-6"></Image>
          <h1 className="mb-3 text-4xl font-bold text-white">Bem-vindo</h1>
          <p className="mb-8 text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
          <SignInButton>
            <Button variant="outline">
            <Image
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Entrar com Google
          </Button></SignInButton>
        </div>
      </div>
      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
