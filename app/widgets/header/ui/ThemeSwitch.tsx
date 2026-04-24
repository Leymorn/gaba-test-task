"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { useI18n } from "@/shared/i18n/I18nProvider";

enum Theme {
  Dark = "dark",
  Light = "light",
}

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);
  const { dictionary } = useI18n();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Button
      ariaLabel={dictionary.header.toggleThemeAriaLabel}
      icon={theme === Theme.Dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      iconOnly
      onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}
    />
  );
};
