"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel-react";

const Carousel = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.Carousel),
  { ssr: false }
);
const CarouselContent = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselContent),
  { ssr: false }
);
const CarouselItem = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselItem),
  { ssr: false }
);
const CarouselPrevious = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselPrevious),
  { ssr: false }
);
const CarouselNext = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselNext),
  { ssr: false }
);

const pizzas = [
  {
    name: "Margherita",
    description: "Classic tomato and mozzarella",
    image: "/images/margherita.jpg",
  },
  {
    name: "Pepperoni",
    description: "Spicy pepperoni with extra cheese",
    image: "/images/pepperoni.jpg",
  },
  {
    name: "Vegetarian",
    description: "Loaded with fresh vegetables",
    image: "/images/vegetarian.jpg",
  },
  {
    name: "Hawaiian",
    description: "Ham and pineapple tropical delight",
    image: "/images/hawaiian.jpg",
  },
];

const PizzaCarousel: React.FC = () => {
  const options: EmblaOptionsType = {
    align: "start",
    loop: true,
    skipSnaps: false,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
      "(max-width: 767px)": { slidesToScroll: 1 },
    },
  };

  return (
    <Carousel opts={options} className="w-full max-w-6xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {pizzas.map((pizza, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-48">
                    <Image
                      src={pizza.image}
                      alt={pizza.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{pizza.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pizza.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PizzaCarousel;
