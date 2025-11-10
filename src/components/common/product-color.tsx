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
        {colors.map((item) => (
          <div
            key={item.name}
            onClick={() => setState("color", item.value)}
            className={`w-10 h-10 cursor-pointer border ${
              state.color === item.value
                ? "border-black p-[2px]"
                : "border-transparent"
            }`}
          >
            <div
              className="w-full h-full"
              style={{ backgroundColor: item.hex }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
