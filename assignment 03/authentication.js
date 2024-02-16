const fs = require('fs')
const path = require('path')

const bookPath = path.join(__dirname, 'db', 'users.json')

//  Reading the file in bookPath
function getAllBooks() {
  return new Promise((resolve, reject) => {
    fs.readFile(bookPath, 'utf8', (err, users) => {
      if (err) reject(err)
      resolve(JSON.parse(users))
    })
  })
}

//  function that authenticate the user
function authenticate(req, res, next) {
  return new Promise((resolve, reject) => {
    const body = []
    req.on('data', (chunk) => body.push(chunk))
    req.on('end', async () => {
      const parsedDetails = Buffer.concat(body).toString();

      if (!parsedDetails) reject('No username or password provided')

      if (req.headers["content-type"]) {
        contentType = req.headers["content-type"].toLowerCase()
      }
      if (contentType.includes("application/json")) {
        try {
          resolve(JSON.parse(parsedDetails));
        } catch (error) {
          reject(error);
          return;
        }
      }
      const { username, password } = JSON.parse(parsedDetails)

      const users = await getAllBooks()

      const userFound = users.find((users) => {
        return users.username === username && users.password === password

      })
      if (!userFound) { reject('User not found! please register') }

      if (userFound.password === password) {
        resolve()
      }
      next(req, res)
    })

  })
}


module.exports = {
  authenticate
}