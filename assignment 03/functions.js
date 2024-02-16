const fs = require('fs')
const path = require('path')

const bookPath = path.join(__dirname, 'db', 'book.json')
//  Functions that get,put,post,patch and delete books
const getAllBooks = (req, res) => {
  fs.readFile(bookPath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(400)
      res.end('An error occured')
    }

    res.end(data)
  })

}
const upDateBook = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}
function patchBook(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}
const deleteBook = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}
const addBook = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}

//  Functions that get,put,post,patch and delete Authors

const getAuthor = (req, res) => {
  fs.readFile(bookPath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(400)
      res.end('An error occured')
    }
    try {
      const books = JSON.parse(data);
      const authors = books.map(book => book.author);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(authors));
    } catch (parseError) {
      res.writeHead(500);
      res.end('Error parsing JSON data');
    }
  })
}
const addAuthor = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}
const upDateAuthor = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}
const patchAuthor = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}
const deleteAuthor = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello your ${req.method} Book request is successful`)
}

module.exports = {
  getAllBooks,
  upDateBook,
  deleteBook,
  patchBook,
  addBook,
  getAuthor,
  addAuthor,
  upDateAuthor,
  patchAuthor,
  deleteAuthor
}