interface BookDetails {
    title: string;
    year: number;
    author: string;
}

interface BookWithPreview {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
}

function createBook({ title, year, author }: BookDetails): BookWithPreview {
    const previewText = `Название: ${title}, Автор: ${author}, Год: ${year}`;
    const previewUrl = `www.someurl.com/preview?title=${encodeURIComponent(title)}&year=${year}&author=${encodeURIComponent(author)}`;

    return {
        title,
        year,
        author,
        preview: previewText,
        url: previewUrl,
    };
}

const sourceData: BookDetails = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

console.log(createBook(sourceData));