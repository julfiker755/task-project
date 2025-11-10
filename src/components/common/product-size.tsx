"use client";

const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductSize({ state, setState }: any) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-1">Size</h3>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setState("size", size)}
            className={`size-10 grid  place-items-center border rounded-sm text-sm font-medium ${
              state?.size == size && "bg-black! rounded-sm! text-white! border"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
