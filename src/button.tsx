import "./button.css";
import cn from "classnames";

export default function Button({
  onClick,
  backgroundColor,
  backgroundColorOnHover,
  borderColor,
  borderColorOnHover,
  textColor = "black",
  variant = "default",
  children,
}: {
  onClick?: () => void;
  backgroundColor: string;
  backgroundColorOnHover?: string;
  borderColor: string;
  borderColorOnHover?: string;
  textColor?: string;
  variant?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={cn(
        "flex",
        "w-full h-full",
        { "rounded-[16px]": variant == "default" },
        { "rounded-[8px]": variant == "goober" || "action" },
        {
          "shadow-[5px_6px_0_0_#64748b55] rounded-lg": variant == "action",
        },
        { "bg-(--border-color)": variant == "goober" },
        "border(--border-color) hover:border-(--border-color-on-hover)",
        {
          default: variant == "default",
        }
      )}
      style={
        {
          "--border-color": borderColor,
          "--border-color-on-hover": borderColorOnHover
            ? borderColorOnHover
            : borderColor,
          "--background-color": backgroundColor,
          "--background-color-on-hover": backgroundColorOnHover
            ? backgroundColorOnHover
            : backgroundColor,
          "--text-color": textColor,
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      <div
        className={cn(
          {
            "rounded-[8px] text-[15px] font-bold border-2 border-(--border-color) -translate-y-1 hover:-translate-y-1.5 focus:-translate-y-0.5 active:-translate-y-0.5 mx-[-1.5px]":
              variant == "goober",
          },
          {
            "rounded-lg focus:translate-y-[4px] active:translate-y-[4px] focus:translate-x-[3px] active:translate-x-[3px] border-2 border-solid border-(--border-color) hover:border-(--border-color-on-hover) focus:border-(--border-color-on-hover) active:border-(--border-color-on-hover)":
              variant == "action",
          },
          { "border-2 border-solid rounded-md": variant == "square" },
          "flex items-center justify-between gap-4",
          "text-balance",
          "py-2 px-4",
          "text-(--text-color)",
          "rounded-(--inner-radius)",
          "bg-(--background-color) hover:bg-(--background-color-on-hover)",
          "w-full h-full"
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
