import type { Book } from './Book';

export class Bookshelf {
  private readonly storage: Map<string, Book> = new Map();

  addBook(book: Book) {
    this.storage.set(book.isbn, book);
  }

  getBook(isbn: string): Book {
    const book = this.storage.get(isbn);

    if (!book) {
      throw new Error(`Book with ISBN ${isbn} not found`);
    }

    return book;
  }

  getAllBooks(): Book[] {
    return Array.from(this.storage.values()).sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  getBooksOf(author: string): Book[] {
    return this.getAllBooks()
      .filter((book) => book.author === author)
      .sort((a, b) => a.title.localeCompare(b.title));
  }
  getTotalNumberOfBooks(): number {
    return this.storage.size;
  }
}
