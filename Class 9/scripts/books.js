let booksInfo = [
  {
    title: "Unlocking Android: A Developer's Guide",
    isbn: "1933988673",
    publishedDate: { date: "2009-04-01T00:00:00.000-0700" },
    thumbnailUrl: "https://wallpaperaccess.com/full/399952.jpg",
    status: "PUBLISH",
    authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    categories: ["Open Source", "Mobile"],
  },
  {
    title: "Flex 3 in Action",
    isbn: "1933988746",
    publishedDate: { date: "2009-02-02T00:00:00.000-0800" },
    thumbnailUrl:
      "https://www.conceptstore.co.uk/wp-content/uploads/2020/04/highresolution.jpg",
    status: "PUBLISH",
    authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    categories: ["Internet"],
  },
  {
    title: "Flex 4 in Action",
    isbn: "1935182420",
    publishedDate: { date: "2010-11-15T00:00:00.000-0800" },
    thumbnailUrl:
      "https://c4.wallpaperflare.com/wallpaper/83/500/871/waterfall-high-resolution-desktop-wallpaper-preview.jpg",
    status: "PUBLISH",
    authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
    categories: ["Internet"],
  },
  {
    title: "Collective Intelligence in Action",
    isbn: "1933988312",
    publishedDate: { date: "2008-10-01T00:00:00.000-0700" },
    thumbnailUrl: "https://wallpaperaccess.com/full/428267.gif",
    status: "PUBLISH",
    authors: ["Satnam Alag"],
    categories: ["Internet"],
  },
  {
    title: "Zend Framework in Action",
    isbn: "1933988320",
    publishedDate: { date: "2008-12-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXdCf6yMnbImYbswJrUoIvfwniGnYTSONzS6-G1QeRu74CuMIk3fW6mB9rbfP6JYZX1s&usqp=CAU",
    status: "PUBLISH",
    authors: ["Rob Allen", "Nick Lo", "Steven Brown"],
    categories: ["Web Development"],
  },
];

let deleteBook = (index) => {
  booksInfo.splice(index, 1);
  reRenderBooks();
};

let reRenderBooks = () => {
  let books = "";
  if (booksInfo.length) {
    booksInfo.forEach((info, index) => {
      books += `<div class="book">
        <div class="image-container">
              <img src=${info.thumbnailUrl}></img>
          </div>
        <div class="book-info">
            <p><b>Published Date</b>: ${new Date(
              info.publishedDate.date
            ).toDateString()}</p>
            <hr></hr>
            <p><b>Title</b>: ${info.title}</p>
            <hr></hr>
            <p><b>ISBN</b>: ${info.isbn}</p>
            <hr></hr>
            <p><b>Authors</b>: ${info.authors.toString()}</p>
            <hr></hr>
            <button class="btn btn-danger" onclick="deleteBook(${index})">Delete</button>
            </div>
        </div>`;
    });
  } else {
    books = `<p><b>No books found<b></p>`;
  }
  document.querySelector(".books").innerHTML = books;
};
reRenderBooks();
