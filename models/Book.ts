interface Category {
    id: Number
    name: String
}

interface Page {
    id: Number
    text: String
    pageNumber: Number
}

export interface Book {
    id: Number
    author: String
    releaseDate: String
    title: String
    description: String
    cover: String
    categories: Category[]
    pages: Page[]
}

export interface Show {
    id: Book['id']
}
