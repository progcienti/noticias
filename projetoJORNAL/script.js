function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("newsTitle").classList.add("move-down");
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("newsTitle").classList.remove("move-down");
}


        function toggleMenu() {
            var menuIcon = document.querySelector('.menu-icon');
            menuIcon.classList.toggle('show-menu');
            var sidebar = document.getElementById("mySidebar");
            if (sidebar.style.width === "250px") {
                sidebar.style.width = "0";
            } else {
                sidebar.style.width = "250px";
            }
        }
        function search() {
            var query = document.getElementById("searchInput").value.trim().toLowerCase();
            var noticias = document.querySelectorAll('.news-container article');
        
            noticias.forEach(function(noticia) {
                var titulo = noticia.querySelector('h2').textContent.toLowerCase();
                var descricao = noticia.querySelector('p').textContent.toLowerCase();
        
                if (titulo.includes(query) || descricao.includes(query)) {
                    noticia.style.display = 'block';
                } else {
                    noticia.style.display = 'none';
                }
            });
        }
        