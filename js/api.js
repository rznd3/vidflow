async function listarVideos() {
    const conexaoAPI = await fetch('http://localhost:3000/videos')
    
    if (!conexaoAPI.ok) {
        throw new Error('Não foi possível criar conexão com o servidor.')
    }
    
    const videos = await conexaoAPI.json()
    console.log(videos);
    return videos
}

export const conectaAPI = {
    listarVideos
}





