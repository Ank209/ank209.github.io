function SetDest(type) {
    let desc = document.getElementById("desc");
    if (type == '') {
        desc.innerText = "Select a site from below to load that project";
    } else if (type == 'RuneData') {
        desc.innerText = "RuneData loads a RuneScape player's skills and stats and gives them some helpful information about their account, enter the name 'Iron Ankh' if you don't know any RuneScape players"
    } else if (type == 'MovieSplits') {
        desc.innerText = "MovieSplits breaks down a movie by scene and creates a timeline showing how the movie is structured";
    }
}