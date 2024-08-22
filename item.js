const cardId = (new URLSearchParams(location.search).get('id'))
console.log(cardId)

fetch(`https://fakestoreapi.com/products/${cardId}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
    })
    .catch((err) => console.log(err))

