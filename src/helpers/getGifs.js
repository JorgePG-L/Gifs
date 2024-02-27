

export const getGifs = async(category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?&api_key=o2KBf9h4gCFFWlS2Aj0ww2OlMNOFg9vW&q=${category}&limit=20 `;
    const resp = await fetch (url)
    
    const{ data } = await resp.json()
    const gifs = data.map ( img => ({
        id: img.id,
        title: img.title,
        urls: img.images.downsized_medium.url
    }) )
    return gifs;
}
