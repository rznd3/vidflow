const btnCategoria = document.querySelectorAll('.superior__item')

btnCategoria.forEach(btn => {
    let nomeCategoria = btn.getAttribute('name')
    btn.addEventListener('click', () => filtrarCategoria(nomeCategoria))
})

function filtrarCategoria(categoriaSelecionada) {
    const videos = document.querySelectorAll('.videos__item')

    videos.forEach(video => {
        let categoriaVideo = video.querySelector('.categoria').textContent.toLowerCase()
        let categoriaFiltrada = categoriaSelecionada.toLowerCase()

        video.style.display = (categoriaVideo.includes(categoriaFiltrada) || categoriaFiltrada == 'tudo') ? "block" : "none" 
    })
}