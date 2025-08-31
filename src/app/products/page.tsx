"use client";

import Image from "next/image";
import { Instagram, ShoppingCart, Plus, Minus } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { SiteFooter } from "@/components/footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { UserNav } from "@/components/user-nav";

type Product = {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  hint: string;
};

export default function ProductsPage() {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    totalItemsInCart,
  } = useCart();

  const placeholderProducts: Product[] = [
    {
      id: 1,
      name: "Camiseta Pixo Arte",
      price: 89.9,
      priceFormatted: "R$ 89,90",
      image: "/produto1.png",
      hint: "street art graffiti",
    },
    {
      id: 2,
      name: "Camiseta Embraza Classic",
      price: 79.9,
      priceFormatted: "R$ 79,90",
      image: "/produto2.png",
      hint: "bold typography",
    },
    {
      id: 3,
      name: "Camiseta Urban Lines",
      price: 89.9,
      priceFormatted: "R$ 89,90",
      image: "/produto3.png",
      hint: "minimalist line art",
    },
    {
      id: 4,
      name: "Camiseta Spray Can",
      price: 99.9,
      priceFormatted: "R$ 99,90",
      image: "/produto4.png",
      hint: "pop art",
    },
    {
      id: 5,
      name: "Camiseta Spray Can",
      price: 99.9,
      priceFormatted: "R$ 99,90",
      image: "/produto5.png",
      hint: "pop art",
    },
    {
      id: 6,
      name: "Camiseta Spray Can",
      price: 99.9,
      priceFormatted: "R$ 99,90",
      image: "/produto6.png",
      hint: "pop art",
    },
  ];

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product, 1);
  };

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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <div className="relative">
                    <ShoppingCart />
                    {totalItemsInCart > 0 && (
                      <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full p-1 text-xs"
                      >
                        {totalItemsInCart}
                      </Badge>
                    )}
                  </div>
                  <span className="sr-only">Carrinho</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full py-4">
                  {cart.length > 0 ? (
                    <div className="flex-1 overflow-y-auto pr-4">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 mb-4"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={100}
                            className="rounded-md object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.priceFormatted}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span>{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-1 items-center justify-center">
                      <p className="text-muted-foreground">
                        Seu carrinho está vazio.
                      </p>
                    </div>
                  )}

                  <SheetFooter className="mt-auto pt-4 border-t">
                    <div className="w-full">
                      <div className="flex justify-between items-center font-bold text-lg mb-4">
                        <span>Total:</span>
                        <span>R$ {cartTotal.toFixed(2).replace(".", ",")}</span>
                      </div>
                      <Button
                        asChild
                        className="w-full"
                        size="lg"
                        disabled={cart.length === 0}
                      >
                        <Link href="/checkout">Prosseguir para o Checkout</Link>
                      </Button>
                    </div>
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://instagram.com/embraza.oficial"
                target="_blank"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="products"
          className="py-16 md:py-24 bg-background animate-fade-in-up"
        >
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              Nossa Coleção
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {placeholderProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="block"
                >
                  <Card className="overflow-hidden bg-card border-border/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.5)] flex flex-col w-full max-w-xs cursor-pointer">
                    <CardContent className="p-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover"
                        data-ai-hint={product.hint}
                      />
                    </CardContent>
                    <div className="flex flex-col flex-grow p-4">
                      <CardHeader className="p-0 mb-auto">
                        <CardTitle className="text-lg">
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="p-0 mt-4 flex justify-between items-center">
                        <p className="text-xl font-bold text-primary">
                          {product.priceFormatted}
                        </p>
                        <Button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="hidden lg:inline-flex"
                        >
                          Adicionar ao carrinho
                        </Button>
                        <Button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="p-2 sm:p-3 md:p-3 lg:hidden"
                        >
                          <Plus className="h-4 w-4" />
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
