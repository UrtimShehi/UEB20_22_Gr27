var books = [
  
   
  
    {
      image: "https://i.pinimg.com/236x/04/1c/dd/041cdd9ff00680e9586f645c90f71462.jpg",
      author: "George Orwell",
      title: "1984",
      price: 28
    },
    {
      image: "https://i.pinimg.com/236x/b5/2f/21/b52f216591803d8d2aaca40103c57bef.jpg",
      author: "J.K. Rowling",
      title: "Harry Potter and the Sorcerer's Stone",
      price: 22
    },
    {
      image: "https://i.pinimg.com/236x/76/8a/4e/768a4e5b69a78b0114b312a9687aa53c.jpg",
      author: "F. Scott Fitzgerald",
      title: "The Great Gatsby",
      price: 30
    },
    {
      image: "https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg",
      author: 'Mary Shelly',
      title: 'Frankenstein',
      price: 34
    },
    {
      image: "https://i.pinimg.com/236x/ee/fe/dd/eefeddfd8629067d1b087ba45b3c5bce.jpg",
      author: "Agatha Christie",
      title: "Murder on the Orient Express",
      price: 26
    },
    {
      image: "https://i.pinimg.com/236x/f2/db/13/f2db132a4d454b953831944f1c42a15c.jpg",
      author: "J.R.R. Tolkien",
      title: "The Hobbit",
      price: 32
    }

  ]

  populateDom(books)
  
  function populateDom(books) {
      var output = '';
      books.forEach((book)=> output += "<div class = 'book read'>"  +
                                         "<div class = 'cover'>" + 
                                           "<img src=" + book.image + ">" +
                                         "</div>" + 
                                         "<div class = 'description'>" + 
                                           "<p class = 'title'>" + book.title + "<br>" +
                                             "<span class = 'author'>" + book.author + "</span></p>" +
                                         "</div>" + 
                                       "</div>"
                    )

      document.getElementById('list-th').innerHTML = output;
  }

  function filterBooks() {
    // Get the value from the input field
    var search = document.getElementById("textInput").value.toLowerCase();
    
    if(search != '') {
      var filteredBooks = books.filter(book => book.title.toLowerCase().startsWith(search))
      populateDom(filteredBooks)

      return 
    }

    populateDom(books)
  }