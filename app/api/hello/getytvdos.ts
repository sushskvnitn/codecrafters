export async function getyvdos(): Promise<any[]> {
    const playlistid ='PLtBj3tlLeGLgDO7D6GuGvcoCcEZwO0CL5'
    const API_KEY = process.env.API_KEY ;
    return await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${playlistid}&key=${API_KEY}`)
    .then(res=>res.json())
    .then(data => data.items);
}