import "./button.css";
import cn from "classnames";

export default function Button({
  backgroundColor,
  borderColor,
  textColor = "black",
  variant = "default",
  children,
}: {
  backgroundColor: string;
  borderColor: string;
  textColor?: string;
  variant?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={cn("w-full rounded-full hover:bg-transparent", {
        default: variant == "default",
      })}
      style={
        {
          "--border-color": borderColor,
          "--background-color": backgroundColor,
          "--text-color": textColor,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          {
            "rounded-[8px] text-[15px] font-bold border-2 px-5 py-2 -translate-y-1 hover:-translate-y-1.5 active:-translate-y-0.5 mx-[-1.5px]":
              variant == "goober",
          },
          "flex items-center gap-4",
          "text-balance",
          "py-4 px-4",
          "text-(--text-color)",
          "rounded-(--inner-radius)",
          "bg-(--background-color)"
        )}
      >
        {children}
        <svg
          className="flex-none"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.43934 7L3.96967 2.53033C3.67678 2.23744 3.67678 1.76256 3.96967 1.46967C4.26256 1.17678 4.73744 1.17678 5.03033 1.46967L10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L5.03033 12.5303C4.73744 12.8232 4.26256 12.8232 3.96967 12.5303Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </a>
  );
}
