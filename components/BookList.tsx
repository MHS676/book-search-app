interface Book {
    key: string;
    title: string;
    author_name?: string[];
}

interface Props {
    books: Book[];
}

export default function BookList({ books }: Props) {
    if (!books.length) {
        return <p className="text-center mt-4">No results found.</p>;
    }

    return (
        <ul className="mt-4 space-y-4">
            {books.map((book) => (
                <li key={book.key} className="border p-4 rounded shadow">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm text-gray-600">
                        {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
                    </p>
                </li>
            ))}
        </ul>
    );
}
