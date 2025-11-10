"use client";

const colors = [
  { name: "White", value: "white", hex: "#d3d3d3" },
  { name: "Gray", value: "gray", hex: "#A0A0A0" },
  { name: "Blue", value: "blue", hex: "#87CEEB" },
  { name: "Rose", value: "rose", hex: "#FF9ABD" },
  { name: "Cyan", value: "cyan", hex: "#7FFFD4" },
];

export default function ProductColors({ state, setState }: any) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-1">Colors</h3>
      <div className="flex gap-3">
        {colors.map(({ name, value, hex }) => (
          <button
            key={value}
            onClick={() => setState("color", value)}
            className={`w-8 h-8 rounded cursor-pointer border-1 border-transparent transition-all ${
              state?.color === value && "border-[#000]!"
            }`}
            style={{ backgroundColor: hex }}
            title={name}
            aria-label={`Select ${name}`}
          />
        ))}
      </div>
    </div>
  );
}
