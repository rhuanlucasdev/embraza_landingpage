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
import { Package, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data para o resumo
const mockLastOrder = {
  id: "#3210",
  date: "15/07/2024",
  status: "Enviado",
  total: "R$ 189,80",
  paymentMethod: "Cartão de Crédito - Final 1234",
};

export default function AccountPage() {
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
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            Minha Conta
          </h1>

          {/* Atalhos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link href="/meus-pedidos" className="block">
              <Card className="hover:border-primary transition-colors h-full">
                <CardHeader className="flex flex-row items-center justify-between space-x-4">
                  <div className="space-y-1.5">
                    <CardTitle>Meus Pedidos</CardTitle>
                    <CardDescription>
                      Acompanhe seus pedidos e veja seu histórico.
                    </CardDescription>
                  </div>
                  <Package className="h-8 w-8 text-muted-foreground" />
                </CardHeader>
              </Card>
            </Link>
            <Link href="/meus-dados" className="block">
              <Card className="hover:border-primary transition-colors h-full">
                <CardHeader className="flex flex-row items-center justify-between space-x-4">
                  <div className="space-y-1.5">
                    <CardTitle>Meus Dados</CardTitle>
                    <CardDescription>
                      Gerencie suas informações e senha.
                    </CardDescription>
                  </div>
                  <User className="h-8 w-8 text-muted-foreground" />
                </CardHeader>
              </Card>
            </Link>
          </div>

          {/* Resumo do Último Pedido */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-headline">
              Resumo do Último Pedido
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Número do Pedido
                  </span>
                  <span className="font-medium">{mockLastOrder.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Data</span>
                  <span className="font-medium">{mockLastOrder.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <Badge
                    variant={
                      mockLastOrder.status === "Enviado"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {mockLastOrder.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Forma de Pagamento
                  </span>
                  <span className="font-medium">
                    {mockLastOrder.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>{mockLastOrder.total}</span>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/meus-pedidos"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Ver todos os pedidos
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
