"use client";

import Image from "next/image";
import {
  Zap,
  Instagram,
  ShoppingCart,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { SiteFooter } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { GradientGlowDivider } from "@/components/gradient-glow-divider";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import { UserNav } from "@/components/user-nav";

export default function Home() {
  const tshirtImages = [
    {
      src: "https://picsum.photos/600/800?random=1",
      alt: "Design de camiseta 1",
      hint: "abstract design",
    },
    {
      src: "https://picsum.photos/600/800?random=2",
      alt: "Design de camiseta 2",
      hint: "graphic illustration",
    },
    {
      src: "https://picsum.photos/600/800?random=3",
      alt: "Design de camiseta 3",
      hint: "minimalist typography",
    },
    {
      src: "https://picsum.photos/600/800?random=4",
      alt: "Design de camiseta 4",
      hint: "retro style",
    },
    {
      src: "https://picsum.photos/600/800?random=5",
      alt: "Design de camiseta 5",
      hint: "nature inspired",
    },
    {
      src: "https://picsum.photos/600/800?random=6",
      alt: "Design de camiseta 6",
      hint: "vintage look",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Logo />
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" target="_blank">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/products">
                <ShoppingCart />
                <span className="sr-only">Carrinho</span>
              </Link>
            </Button>
            <UserNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
          <ParticleBackground />
          <div className="relative z-10 text-center p-4 animate-fade-in-down">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 font-display text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Embraza
            </h1>
            <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-foreground/80 font-display">
              O pixo é arte. A arte é Embraza.
            </p>
          </div>
        </section>

        <GradientGlowDivider />

        {/* Gallery Section */}
        <section
          id="gallery"
          className="py-16 md:py-24 bg-background animate-fade-in-up"
        >
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              Se liga nas peitas
            </h2>
            <InfiniteMovingCards
              items={tshirtImages.map((item, index) => (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                  key={index}
                  data-ai-hint={item.hint}
                />
              ))}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="container text-center mt-12">
            <Button asChild size="lg" className="animate-pulse-slow">
              <Link href="/products">
                <ShoppingCart className="mr-2 h-5 w-5" /> Ver Coleção
              </Link>
            </Button>
          </div>
        </section>

        {/* Instagram CTA Section */}
        <section
          id="instagram-cta"
          className="py-16 md:py-24 text-center bg-secondary animate-fade-in-up"
        >
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
              Siga a Embraza
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
              Fique por dentro das novidades e coleções exclusivas no nosso
              Instagram.
            </p>
            <Button asChild size="lg" className="animate-pulse-slow">
              <Link href="#" target="_blank">
                <Instagram className="mr-2 h-5 w-5" /> @embraza.oficial
              </Link>
            </Button>
          </div>
        </section>

        <GradientGlowDivider />
      </main>
      <SiteFooter />
    </div>
  );
}
