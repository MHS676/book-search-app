'use client';

import { useState } from 'react';

interface Props {
    onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a book..."
                className="border px-4 py-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Search
            </button>
        </form>
    );
}
