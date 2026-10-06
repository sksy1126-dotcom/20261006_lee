AOS.init();


document.addEventListener("DOMContentLoaded", function(){

    const searchInput = document.getElementById("searchInput");
    const portfolioItems = document.querySelectorAll(".porfolio-item");

    searchInput.addEventListener("input", function(){
        const searchTerm = this.value.toLowerCase();

        portfolioItems.forEach((item)=> {
            const title = item.querySelector("h4").textContent.toLowerCase();

            if(title.includes(searchTerm)) {
                item.style.display = "block";
            }else {
                item.style.display = "none";
            }
        })

    })

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((button) => {

        button.addEventListener("click", function() {
        const filter = this.getAttribute("data-filter");
        portfolioItems.forEach((item) =>{
            if (filter === 'all' || item.getAttribute("data-category") === filter) {
                item.style.display = "block";
            }else {
                item.style.display = "none"
            }
        })
    })
    
    })





})
