const quote = document.querySelector('.quote')
const person = document.querySelector('.person')
const btn = document.querySelector('#new-quote')

const endpoint =
  'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

async function fetchData() {
  let url = endpoint
  try {
    let response = await fetch(url)
    return await response.json()
  } catch (error) {
    quote.innerText = "Can't reach the server" + '\n' + 'Quote Generator not working'
    person.innerText = ''
  }
}

btn.addEventListener('click', async () => {
  let data = await fetchData()
  let random = Math.floor(Math.random() * data.quotes.length)
  quote.innerText = ' “' + data.quotes[random].quote + '”'
  person.innerText = data.quotes[random].author
})
