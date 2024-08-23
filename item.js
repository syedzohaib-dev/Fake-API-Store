let body = document.querySelector('body')

const cardId = (new URLSearchParams(location.search).get('id'))
console.log(cardId)

fetch(`https://fakestoreapi.com/products/${cardId}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        let container = document.createElement('div')
        container.classList.add('container')
        container.innerHTML = `
         <div class="box1">
            <img src="${data.image}"
                alt="">
        </div>
        <div class="box2">
            <div class="title">
                <div class="heading">
                    <p>${data.title}</p>
                </div>
                <div class="description">
                    <p>${data.description}</p>
                </div>
            </div>
            <div class="price">
                <div class="pricing">
                    <p>price:${data.price}</p>
                </div>
                <div class="category">
                    <p>${data.category}</p>
                </div>
            </div>
        </div>
        `
        body.appendChild(container)

    })
    .catch((err) => console.log(err))

