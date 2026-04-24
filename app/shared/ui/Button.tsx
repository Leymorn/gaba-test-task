"use client";

import { ReactNode } from "react";

type ButtonVariant = "default" | "ghost" | "cancel";

type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  ariaLabel?: string;
  className?: string;
  iconOnly?: boolean;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const buttonClassName = ({
  variant = "default",
  className,
  iconOnly,
}: Pick<ButtonProps, "className" | "iconOnly" | "variant">) =>
  [
    "inline-flex h-[50px] items-center justify-center gap-2 rounded-full px-4 text-sm font-medium",
    variant === "default" ? "surface-interactive" : "",
    variant === "ghost" ? "surface-ghost text-[var(--foreground)]" : "",
    variant === "cancel" ? "surface-cancel text-[var(--danger)]" : "",
    iconOnly ? "w-[50px] px-0" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

export function Button(props: ButtonProps) {
  const iconMarkup = props.icon ? <span className="shrink-0">{props.icon}</span> : null;
  const content = (
    <>
      {iconMarkup}
      {props.children ? <span>{props.children}</span> : null}
    </>
  );

  return (
    <button
      type={props.type ?? "button"}
      aria-label={props.ariaLabel}
      disabled={props.disabled}
      onClick={props.onClick}
      className={buttonClassName(props)}
    >
      {content}
    </button>
  );
}
