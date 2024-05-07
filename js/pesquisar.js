const barraPesquisa = document.querySelector('.pesquisar__input')
barraPesquisa.addEventListener('input', pesquisar)

export function pesquisar() {
    const videos = document.querySelectorAll('.videos__item');
    const valorFiltro = barraPesquisa.value.trim().toLowerCase();
    
    videos.forEach((video) => {
        const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

        video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
     })
}