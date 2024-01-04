var books = [
    {
      image: "http://d.gr-assets.com/books/1414348859l/23209971.jpg",
      author: 'Mary Shelly',
      title: 'Libri  1',
      price: 34
    },
    {
      image: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
      author: 'Libri 2',
      title: 'Nita',
      price: 34
    },
    {
      image: "http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg",
      author: 'Mary Shelly',
      title: 'Taulant',
      price: 34
    },
    {
      image: "https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg",
      author: 'Mary Shelly',
      title: 'Libri 3',
      price: 34
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