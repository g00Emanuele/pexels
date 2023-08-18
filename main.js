// All'avvio la query di default è 'nature'
window.onload = () => {
    fetch("https://api.pexels.com/v1/search?query=nature", {
        headers:{
            'Authorization': 'oL8SBKg1TfxNP6e50T46ZhRff2DaYMThhVmryFxdFBqJkS7JR3EmcgHS'
        }})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const photoContainer = document.getElementById('photo-container')
        photoContainer.innerHTML = data.photos.map((photo) => {
            return `
            <div class='col-3'<div class="card">
                        <img src="${photo.src.tiny}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text">PH: ${photo.photographer}</p>
                        </div>
                    </div></div>`
        }).join('')
    })
    .catch((err) => console.log('errore', err))
}


// Creo la funzione per cercare le foto in base al'input di ricerca
const search = document.getElementById('search').addEventListener('click', (query) => {
    query = document.getElementById('input').value
    console.log(query)

    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers:{
            'Authorization': 'oL8SBKg1TfxNP6e50T46ZhRff2DaYMThhVmryFxdFBqJkS7JR3EmcgHS'
    }})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const photoContainer = document.getElementById('photo-container')
        photoContainer.innerHTML = ''
        photoContainer.innerHTML = data.photos.map((photo) => {
            return `<div class='col-3'<div class="card">
                        <img src="${photo.src.tiny}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text">PH: ${photo.photographer}</p>
                        </div>
                    </div></div>`
        }).join('')
    })
    .catch((err) => console.log('errore', err))
})


