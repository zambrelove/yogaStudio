function openSidebar(){
    let openSidebar = document.getElementById('Sidebar');
    openSidebar.classList.add('activeSearch')
}
function closeSidebar(){
    let closeSidebar = document.getElementById('Sidebar');
    closeSidebar.classList.remove('activeSearch');
}

function openSearchBox(){
    let openSearchBox = document.getElementById('SearchBox');
    openSearchBox.classList.add('activeSearch');
}

function closeSearchBox(){
    let closeSearchBox = document.getElementById('SearchBox');
    closeSearchBox.classList.remove('activeSearch');
}