const http = require('http')
//  Importing funtions from functions.js file
const { getAllBooks, upDateBook, deleteBook, getAuthor, addAuthor, upDateAuthor, deleteAuthor, patchAuthor, addBook, patchBook } = require('./functions')
const { authenticate } = require('./authentication')

const PORT = 4000
const HOST_NAME = '127.0.0.1'

//  Function that handles all the request
function requestHandler(req, res) {
  if (req.url === '/books' && req.method === 'GET') authenticate(req, res, getAllBooks)
  if (req.url === '/books' && req.method === 'PUT') authenticate(req, res, upDateBook)
  if (req.url === '/books' && req.method === 'DELETE') authenticate(req, res, deleteBook)
  if (req.url === '/books' && req.method === 'PATCH') authenticate(req, res, patchBook)
  if (req.url === '/books' && req.method === 'POST') authenticate(req, res, addBook)
  if (req.url === '/books/author/' && req.method === 'GET') authenticate(req, res, getAuthor)
  if (req.url === '/books/author/' && req.method === 'POST') authenticate(req, res, addAuthor)
  if (req.url === '/books/author/' && req.method === 'PUT') authenticate(req, res, upDateAuthor)
  if (req.url === '/books/author/' && req.method === 'PATCH') authenticate(req, res, patchAuthor)
  if (req.url === '/books/author/' && req.method === 'DELETE') authenticate(req, res, deleteAuthor)
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
  console.log(`server is listening at ${HOST_NAME}:${PORT}`)
})

