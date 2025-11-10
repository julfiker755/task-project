"use client";

import { Plus, Minus } from "lucide-react";

export default function ProductQuantity({ state, setState }: any) {
  const { quantity } = state;

  const handleIncrement = () => {
    if (quantity < 99) setState("quantity", quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setState("quantity", quantity - 1);
  };

  const handleChange = (value: string) => {
    const parsed = parseInt(value) || 1;
    setState("quantity", Math.min(Math.max(parsed, 1), 99));
  };

  return (
    <div className="flex items-center border border-border  w-fit">
      <button
        onClick={handleDecrement}
        className="p-3 hover:bg-muted transition"
        aria-label="Decrease quantity"
      >
        <Minus size={18} className="text-muted-foreground" />
      </button>

      <input
        type="number"
        value={quantity}
        onChange={(e) => handleChange(e.target.value)}
        className="w-12 text-center border-0 bg-transparent text-foreground    appearance-none
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none font-medium outline-none"
        min={1}
        max={99}
      />

      <button
        onClick={handleIncrement}
        className="p-3 hover:bg-muted transition"
        aria-label="Increase quantity"
      >
        <Plus size={18} className="text-muted-foreground" />
      </button>
    </div>
  );
}
