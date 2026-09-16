<?php
declare(strict_types=1);

// Library Management System using PHP Functions

// Book class to represent a book in the library
class Book {
    public function __construct(
        public string $title,
        public string $author,
        public string $isbn,
        public bool $isAvailable = true
    ) {}
}

// Library class to manage the collection of books
class Library {
    private array $books = [];

    // Function to add a book to the library
    public function addBook(Book $book): void {
        $this->books[$book->isbn] = $book;
    }

    // Function to remove a book from the library
    public function removeBook(string $isbn): bool {
        if (isset($this->books[$isbn])) {
            unset($this->books[$isbn]);
            return true;
        }
        return false;
    }

    // Function to search for a book by title or author
    public function searchBook(string $query): array {
        return array_filter($this->books, function($book) use ($query) {
            return stripos($book->title, $query) !== false || stripos($book->author, $query) !== false;
        });
    }

    // Function to borrow a book
    public function borrowBook(string $isbn): bool {
        if (isset($this->books[$isbn]) && $this->books[$isbn]->isAvailable) {
            $this->books[$isbn]->isAvailable = false;
            return true;
        }
        return false;
    }

    // Function to return a book
    public function returnBook(string $isbn): bool {
        if (isset($this->books[$isbn]) && !$this->books[$isbn]->isAvailable) {
            $this->books[$isbn]->isAvailable = true;
            return true;
        }
        return false;
    }

    // Function to get all books
    public function getAllBooks(): array {
        return $this->books;
    }
}

// Function to display a book's information
function displayBook(Book $book): void {
    echo "Title: {$book->title}<br />";
    echo "Author: {$book->author}<br />";
    echo "ISBN: {$book->isbn}<br />";
    echo "Status: " . ($book->isAvailable ? "Available" : "Borrowed") . "<br />";
    echo "--------------------<br />";
}

// Function to display all books in the library
function displayLibrary(Library $library): void {
    $books = $library->getAllBooks();
    if (empty($books)) {
        echo "The library is empty.<br />";
    } else {
        foreach ($books as $book) {
            displayBook($book);
        }
    }
}

// Create a new library
$library = new Library();

// Add some books to the library
$library->addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"));
$library->addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789"));
$library->addBook(new Book("1984", "George Orwell", "9780451524935"));

// Display all books in the library
echo "Initial Library State:<br />";
displayLibrary($library);

// Search for a book
$searchQuery = "Gatsby";
$searchResults = $library->searchBook($searchQuery);
echo "<br />Search Results for '$searchQuery':<br />";
foreach ($searchResults as $book) {
    displayBook($book);
}

// Borrow a book
$borrowIsbn = "9780743273565";
if ($library->borrowBook($borrowIsbn)) {
    echo "Book with ISBN $borrowIsbn has been borrowed.<br />";
} else {
    echo "Failed to borrow book with ISBN $borrowIsbn.<br />";
}

// Display updated library state
echo "<br />Library State After Borrowing:<br />";
displayLibrary($library);

// Return a book
$returnIsbn = "9780743273565";
if ($library->returnBook($returnIsbn)) {
    echo "Book with ISBN $returnIsbn has been returned.<br />";
} else {
    echo "Failed to return book with ISBN $returnIsbn.<br />";
}

// Display final library state
echo "<br />Final Library State:<br />";
displayLibrary($library);

?>
