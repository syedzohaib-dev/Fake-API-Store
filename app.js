let mainContainer = document.getElementById('mainContainer')


fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.forEach(item => {
            console.log(item.id)    
            let col = document.createElement('div')
            let anchor = document.createElement('a')
            anchor.href = `./item.html?id=${item.id}`
            anchor.classList.add('anchor')
            col.classList.add('col')
            anchor.innerHTML = `
                 <div class="card shadow-sm" style="border: 10px solid #93C54B; height:600px">
                    <img src="${item.image}"
                        class="bd-placeholder-img card-img-top" width="100%" height="400" alt="">
                    <div class="card-body" style="background-color: #93C54B;">
                        <h3 class='text-center'>${item.title}</h3>
                        <p class="card-text"></p>
                        <div class="d-flex justify-content-between" style='position:absolute;bottom:10px;'> 
                        </div>
                    </div>
                </div>
            `
            col.appendChild(anchor)
            mainContainer.appendChild(col)










        })
    })