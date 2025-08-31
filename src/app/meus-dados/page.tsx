"use client";

import { UserNav } from "@/components/user-nav";
import { SiteFooter } from "@/components/footer";
import Logo from "@/components/logo";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Mock data
const mockUser = {
  name: "Admin",
  cpf: "123.456.789-00",
  phone: "(11) 98765-4321",
  birthDate: "1990-01-01",
};

const mockAddresses = [
  {
    id: 1,
    name: "Casa",
    street: "Rua das Flores, 123",
    neighborhood: "Centro",
    city: "São Paulo",
    state: "SP",
    zip: "01001-000",
  },
  {
    id: 2,
    name: "Trabalho",
    street: "Avenida Paulista, 1578",
    neighborhood: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    zip: "01310-200",
  },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <UserNav />
          </div>
        </div>
      </header>

      <main className="flex-1 flex justify-center py-12 px-4">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 font-headline text-center">
            Meus Dados
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>
                    Atualize seus dados cadastrais. Para alterar e-mail ou
                    senha, utilize os botões dedicados.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="flex-1">
                      Alterar E-mail
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Alterar Senha
                    </Button>
                  </div>
                  <Separator />
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue={mockUser.name} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <Input id="cpf" defaultValue={mockUser.cpf} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" defaultValue={mockUser.phone} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Data de Nascimento</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        defaultValue={mockUser.birthDate}
                      />
                    </div>
                    <Button>Salvar Alterações</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold font-headline mb-4">
                Meus Endereços
              </h2>
              <div className="space-y-4">
                {mockAddresses.map((address) => (
                  <Card key={address.id}>
                    <CardHeader className="flex flex-row justify-between items-start pb-2">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">
                          {address.name}
                        </CardTitle>
                        <CardDescription>{address.street}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {address.neighborhood}
                      </p>
                      <p className="text-sm text-muted-foreground">{`${address.city} - ${address.state}`}</p>
                      <p className="text-sm text-muted-foreground">{`CEP: ${address.zip}`}</p>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" className="w-full">
                  Adicionar Novo Endereço
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
