import { searchResults, type SearchResult, type SearchResultType } from "./search-data";

export type SearchGroup = {
  type: SearchResultType;
  items: SearchResult[];
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const scoreResult = (query: string, result: SearchResult) => {
  const q = normalize(query);
  if (!q) return 0;

  const title = normalize(result.title);
  const subtitle = normalize(result.subtitle);
  const keywords = result.keywords.map(normalize);
  const corrections = result.correctionFor?.map(normalize) ?? [];
  const intents = result.intentFor?.map(normalize) ?? [];

  if (title === q) return 100;
  if (corrections.includes(q)) return 96;
  if (title.startsWith(q)) return 88;
  if (title.includes(q)) return 76;
  if (keywords.some((keyword) => keyword === q || keyword.includes(q))) return 68;
  if (intents.some((intent) => intent === q || intent.includes(q))) return 64;
  if (subtitle.includes(q)) return 48;
  if (q.split(" ").some((word) => word.length > 2 && keywords.some((keyword) => keyword.includes(word)))) {
    return 36;
  }

  return 0;
};

export function getSmartSearchResults(query: string, limit = 8) {
  return searchResults
    .map((result) => ({ result, score: scoreResult(query, result) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.result);
}

export function getCorrection(query: string) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return null;

  const corrected = searchResults.find((result) =>
    result.correctionFor?.map(normalize).includes(normalizedQuery)
  );

  return corrected?.title ?? null;
}

export function groupSearchResults(results: SearchResult[]): SearchGroup[] {
  return results.reduce<SearchGroup[]>((groups, item) => {
    const group = groups.find((entry) => entry.type === item.type);
    if (group) {
      group.items.push(item);
      return groups;
    }
    return [...groups, { type: item.type, items: [item] }];
  }, []);
}
