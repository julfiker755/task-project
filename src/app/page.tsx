"use client";
import Breadcrumb from "@/components/common/breadcrumb";
import ProductColors from "@/components/common/product-color";
import ProductGallery from "@/components/common/product-gallery";
import ProductQuantity from "@/components/common/product-quantity";
import ProductSize from "@/components/common/product-size";
import { Button } from "@/components/ui/button";
import { useGlobalState } from "@/hooks/useGlobalState";
import { AlertCircle, Heart, MessageCircle, Share2 } from "lucide-react";
import React from "react";

const intState = {
  color: "white",
  size: "",
  quantity: 1,
};

export default function Home() {
  const [state, setState] = useGlobalState(intState);

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className="lg:h-screen  lg:w-screen flex flex-col justify-center items-center mt-4 lg:mt-0">
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductGallery />
          <div className="space-y-2.5">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Man's Fashion", href: "/mens" },
                { label: "Men's Premium Gray Thobe", href: "/men" },
              ]}
            />
            <h1 className="text-[28px] font-semibold text-foreground leading-[42px]">
              Men&apos;s Premium Gray Thobe - Modern Middle Eastern Style
            </h1>
            <p className="text-[#848484] mt-3 text-sm">
              Step into timeless elegance with this premium gray thobe, crafted
              for men who appreciate both tradition and contemporary style
            </p>
            <div className="flex border-b pb-3 items-baseline gap-3">
              <span className="text-2xl font-semibold">
                2.000.00 TL
              </span>
              <span className="text-lg line-through  text-muted-foreground">
                2.550 TL
              </span>
            </div>
            <ProductColors state={state} setState={setState} />
            <ProductSize state={state} setState={setState} />
            <div className="grid grid-cols-1 space-y-2 lg:space-y-0 lg:gap-x-4 lg:grid-cols-[140px_1fr]">
              <ProductQuantity state={state} setState={setState} />
              <Button
                onClick={() => handleSubmit()}
                size="lg"
                className="w-full rounded-none cursor-pointer"
              >
                {" "}
                Add To Cart
              </Button>
            </div>
            <div className="flex flex-wrap space-x-[16px] text-sm border-b pb-[26px] pt-3">
              <button className="flex items-center gap-2 text-foreground  transition">
                <Heart size={18} />
                <span>Add To Wishlist</span>
              </button>
              <button className="flex items-center gap-2 text-foreground">
                <MessageCircle size={18} />
                <span>Ask Any Question</span>
              </button>
              <button className="flex items-center gap-2 text-foreground">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
            <div className="flex mb-3 gap-3 mt-[26px]  p-4 rounded">
            <AlertCircle
              />
              <p className="text-sm text-foreground">
                This product is selling out fast! Just 59 minutes ago, another
                customer purchased it. Place your order now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
