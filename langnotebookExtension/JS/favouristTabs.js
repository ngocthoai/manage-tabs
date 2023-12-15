let favouristButton = document.querySelector('.l_favouristTabs')
favouristButton.addEventListener('click', l_openFavouristTabs)

function l_openFavouristTabs(){
    l_favouristTabs.forEach(tab => {
        openNewTab(tab.url)
    });
    l_renderTabs('#l_tabCurrents',l_favouristTabs)
}