"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { usersApi } from "@/entities/user/api";
import { User } from "@/entities/user/model/types";
import { UserCard } from "@/entities/user/ui/UserCard";
import { debounce } from "@/shared/lib/debounce";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Button } from "@/shared/ui/Button";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const latestQueryRef = useRef("");
  const { dictionary } = useI18n();

  const debouncedSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
          setResults([]);
          setIsLoading(false);
          return;
        }

        try {
          const data = await usersApi.searchUsers(trimmedValue);

          if (latestQueryRef.current === trimmedValue) {
            setResults(data.users);
          }
        } finally {
          if (latestQueryRef.current === trimmedValue) {
            setIsLoading(false);
          }
        }
      }, 800),
    [],
  );

  useEffect(() => {
    const trimmedQuery = query.trim();
    latestQueryRef.current = trimmedQuery;

    if (!trimmedQuery) {
      debouncedSearch.cancel();
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    debouncedSearch(trimmedQuery);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  const clearSearch = () => {
    debouncedSearch.cancel();
    latestQueryRef.current = "";
    setQuery("");
    setResults([]);
    setIsLoading(false);
  };

  const isOpen = query.trim().length > 0;

  return (
    <div className="relative z-20 mr-auto w-full max-w-xl flex-1">
      {isOpen && (
        <button
          type="button"
          aria-label={dictionary.search.clearOverlayAriaLabel}
          className="fixed inset-0 z-0 bg-[var(--overlay)]"
          onClick={clearSearch}
        />
      )}

      <div className="relative z-10">
        <div className="surface-interactive flex h-[50px] items-center gap-3 rounded-full px-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
          <Search className="h-4 w-4 shrink-0 text-[var(--muted)]" />
          <input
            type="text"
            placeholder={dictionary.search.placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
          />
          {isOpen && (
            <Button
              onClick={clearSearch}
              ariaLabel={dictionary.search.clearSearchAriaLabel}
              icon={<X className="h-4 w-4" />}
              iconOnly
              variant="cancel"
              className="h-8 w-8 bg-transparent"
            />
          )}
        </div>

        {isOpen && (
          <div className="surface-static absolute top-[calc(100%+12px)] right-0 left-0 rounded-3xl p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-medium">
                {isLoading
                  ? dictionary.search.searching
                  : dictionary.search.foundUsers(results.length)}
              </p>
            </div>

            <div className="max-h-[60vh] space-y-3 overflow-y-auto pr-1">
              {!isLoading && results.length === 0 && (
                <div className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-6 text-center text-sm text-[var(--muted)]">
                  {dictionary.search.nothingFound}
                </div>
              )}

              {results.map((user) => (
                <div key={user.id} onClick={clearSearch}>
                  <UserCard user={user} compact />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
