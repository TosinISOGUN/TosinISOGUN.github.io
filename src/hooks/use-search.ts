import { useState, useCallback } from 'react';
import { contentApi, Article, Service, Industry } from '@/lib/content';

export interface SearchResult {
  type: 'article' | 'service' | 'industry';
  id: string | number;
  title: string;
  description: string;
  url: string;
  category?: string;
}

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const initializeData = useCallback(async () => {
    // no-op for the simple implementation; contentApi methods are called on demand
    return;
  }, []);

  const search = useCallback(async (searchQuery: string) => {
    setQuery(searchQuery);

    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    // fetch content lists and perform a simple substring match
    const [articles, services, industries] = await Promise.all([
      contentApi.getArticles(),
      contentApi.getServices(),
      contentApi.getIndustries(),
    ]);

    const q = searchQuery.toLowerCase();

    const articleResults = articles
      .filter(a => (a.title + ' ' + a.excerpt + ' ' + (a.tags || []).join(' ')).toLowerCase().includes(q))
      .slice(0, 6)
      .map(a => ({
        type: 'article' as const,
        id: a.id,
        title: a.title,
        description: a.excerpt,
        url: `/insights/${a.slug}`,
        category: a.category,
      }));

    const serviceResults = services
      .filter(s => (s.title + ' ' + s.description + ' ' + (s.capabilities || []).join(' ')).toLowerCase().includes(q))
      .slice(0, 4)
      .map(s => ({
        type: 'service' as const,
        id: s.id,
        title: s.title,
        description: s.subtitle || s.description,
        url: `/services#${s.id}`,
      }));

    const industryResults = industries
      .filter(i => (i.title + ' ' + i.description + ' ' + (i.insights || []).join(' ')).toLowerCase().includes(q))
      .slice(0, 4)
      .map(i => ({
        type: 'industry' as const,
        id: i.id,
        title: i.title,
        description: i.description.slice(0, 120),
        url: `/industries#${i.id}`,
      }));

    setResults([...articleResults, ...serviceResults, ...industryResults]);
    setIsSearching(false);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  return {
    query,
    results,
    isSearching,
    search,
    clearSearch,
    initializeData,
  };
}
