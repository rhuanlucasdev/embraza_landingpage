"use client";

import Image from "next/image";
import {
  ShoppingCart,
  Plus,
  Minus,
  Instagram,
  ChevronLeft,
} from "lucide-react";
import React, { useState, useMemo } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/logo";
import { SiteFooter } from "@/components/footer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import { UserNav } from "@/components/user-nav";

type Product = {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  hint: string;
  description: string;
  images: { src: string; alt: string; hint: string }[];
};

// Mock product data - in a real app, this would come from an API
const placeholderProducts: Product[] = [
  {
    id: 1,
    name: "Camiseta Pixo Arte",
    price: 89.9,
    priceFormatted: "R$ 89,90",
    image: "https://picsum.photos/600/800?random=7",
    hint: "street art graffiti",
    description:
      "Vista a essência da arte de rua com esta camiseta exclusiva. Feita com 100% de algodão premium para máximo conforto e durabilidade. A estampa é uma homenagem autêntica ao pixo, capturando a energia vibrante da cultura urbana. Perfeita para quem vive e respira a cidade.",
    images: [
      {
        src: "https://picsum.photos/600/800?random=7",
        alt: "Vista frontal",
        hint: "t-shirt front",
      },
      {
        src: "https://picsum.photos/600/800?random=11",
        alt: "Vista traseira",
        hint: "t-shirt back",
      },
      {
        src: "https://picsum.photos/600/800?random=12",
        alt: "Detalhe da estampa",
        hint: "print detail",
      },
    ],
  },
  {
    id: 2,
    name: "Camiseta Embraza Classic",
    price: 79.9,
    priceFormatted: "R$ 79,90",
    image: "https://picsum.photos/600/800?random=8",
    hint: "bold typography",
    description:
      "O clássico nunca sai de moda. A Camiseta Embraza Classic traz nosso logo icônico em destaque. Uma peça versátil e estilosa para qualquer ocasião, produzida com malha de alta qualidade que garante um caimento perfeito e conforto o dia todo.",
    images: [
      {
        src: "https://picsum.photos/600/800?random=8",
        alt: "Vista frontal",
        hint: "t-shirt front",
      },
      {
        src: "https://picsum.photos/600/800?random=13",
        alt: "Vista lateral",
        hint: "t-shirt side",
      },
      {
        src: "https://picsum.photos/600/800?random=14",
        alt: "Detalhe do tecido",
        hint: "fabric detail",
      },
    ],
  },
  {
    id: 3,
    name: "Camiseta Urban Lines",
    price: 89.9,
    priceFormatted: "R$ 89,90",
    image: "https://picsum.photos/600/800?random=9",
    hint: "minimalist line art",
    description:
      "Linhas que se cruzam e formam a paisagem urbana. Esta camiseta de design minimalista é para quem aprecia a beleza nos detalhes. Confeccionada com algodão sustentável, é a escolha ideal para um visual moderno e consciente.",
    images: [
      {
        src: "https://picsum.photos/600/800?random=9",
        alt: "Vista frontal",
        hint: "t-shirt front",
      },
      {
        src: "https://picsum.photos/600/800?random=15",
        alt: "Costas da camiseta",
        hint: "t-shirt back",
      },
      {
        src: "https://picsum.photos/600/800?random=16",
        alt: "Modelo vestindo",
        hint: "person wearing",
      },
    ],
  },
  {
    id: 4,
    name: "Camiseta Spray Can",
    price: 99.9,
    priceFormatted: "R$ 99,90",
    image: "https://picsum.photos/600/800?random=10",
    hint: "pop art",
    description:
      "A ferramenta do artista em uma estampa vibrante de pop art. A Camiseta Spray Can celebra a criatividade e a expressão. Com cores ousadas e um tecido macio, ela é a peça que faltava para dar um up no seu visual e mostrar sua paixão pela arte.",
    images: [
      {
        src: "https://picsum.photos/600/800?random=10",
        alt: "Vista frontal",
        hint: "t-shirt front",
      },
      {
        src: "https://picsum.photos/600/800?random=17",
        alt: "Zoom na estampa",
        hint: "print zoom",
      },
      {
        src: "https://picsum.photos/600/800?random=18",
        alt: "Detalhe da manga",
        hint: "sleeve detail",
      },
    ],
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = placeholderProducts.find(
    (p) => p.id === parseInt(params.productId)
  );

  const {
    cart,
    addToCart,
    increaseQuantity: increaseCartQuantity,
    decreaseQuantity: decreaseCartQuantity,
    cartTotal,
    totalItemsInCart,
  } = useCart();

  const [mainImage, setMainImage] = useState(product?.images[0].src);
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background text-foreground">
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        <Link href="/products" className="mt-4 text-primary hover:underline">
          Voltar para a coleção
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-auto flex items-center gap-4">
            <Link href="/products" className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft />
                <span className="sr-only">Voltar</span>
              </Button>
            </Link>
            <div className="hidden sm:block">
              <Logo />
            </div>
          </div>
          <div className="sm:hidden mr-4">
            <Logo />
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
                                onClick={() => decreaseCartQuantity(item.id)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span>{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => increaseCartQuantity(item.id)}
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
              <Link href="#" target="_blank">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <UserNav />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start justify-center">
            {/* Image Gallery */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-md overflow-hidden rounded-lg border">
                <Image
                  src={mainImage || product.image}
                  alt={product.name}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-300 hover:scale-105"
                  data-ai-hint={product.hint}
                />
              </div>
              <div className="flex gap-2 justify-center">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img.src)}
                    className={`overflow-hidden rounded-md border-2 ${
                      mainImage === img.src
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={80}
                      height={100}
                      className="w-full h-auto object-cover aspect-[3/4]"
                      data-ai-hint={img.hint}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl font-bold font-headline">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary">
                {product.priceFormatted}
              </p>
              <Separator />
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <Separator />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantidade:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={handleDecreaseQuantity}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-bold w-8 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={handleIncreaseQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2" /> Adicionar ao carrinho
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="flex-1"
                  >
                    <Link href="/checkout">Comprar</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="cep" className="block text-sm font-medium mb-1">
                  Calcular frete
                </label>
                <div className="flex gap-2">
                  <Input
                    id="cep"
                    type="text"
                    placeholder="Digite seu CEP"
                    className="max-w-xs"
                  />
                  <Button variant="secondary">Calcular</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
