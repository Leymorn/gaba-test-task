import { HomeButton } from "./HomeButton";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeSwitch } from "./ThemeSwitch";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-[var(--border)] bg-[var(--background)]/85">
      <div className="container flex items-center gap-3 px-8 py-4">
        <HomeButton />
        <SearchBar />
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </header>
  );
};
