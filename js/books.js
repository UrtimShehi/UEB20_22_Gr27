var books = [
    {
      image: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
      author: 'Mary Shelly',
      title: 'Andi',
      price: 34
    },
    {
      image: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
      author: 'Mary Shelly',
      title: 'Nita',
      price: 34
    },
    {
      image: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
      author: 'Mary Shelly',
      title: 'Taulant',
      price: 34
    },
    {
      image: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
      author: 'Mary Shelly',
      title: 'Test test',
      price: 34
    }
  ]

  this.populateDom(books)
  
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

  function getContent() {
    // Get the value from the input field
    var search = document.getElementById("textInput").value;
    
    if(search != '') {
      var filteredBooks = books.filter(book => book.title.toLowerCase().startsWith(search.toLowerCase()))
      this.populateDom(filteredBooks)

      return 
    }

    this.populateDom(this.books)
  }