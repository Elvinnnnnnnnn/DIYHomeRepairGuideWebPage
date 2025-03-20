const homeRepairCategoriesData = [
    { title: "Plumbing", logo: "/Plumbing_Logo.png", link: "../Categories Home Page/categories.html?category=plumbing" },
    { title: "Electrical", logo: "/Electrical_logo.jpg", link: "../Categories Home Page/categories.html?category=electricals" },
    { title: "Carpentry", logo: "/Carpentry_logo.jpg", link: "../Categories Home Page/categories.html?category=carpentry" },
    { title: "Painting & Finishing", logo: "/Painting_logo.jpg", link: "../Categories Home Page/categories.html?category=paintingFinishing" },
    { title: "Flooring", logo: "/Flooring_logo.jpg", link: "../Categories Home Page/categories.html?category=flooring" },
    { title: "Roofing & Gutters", logo: "/Roofing_logo.jpg", link: "../Categories Home Page/categories.html?category=roofingGutters" },
    { title: "Appliances Repairs", logo: "/Appliances_logo.jpg", link: "../Categories Home Page/categories.html?category=appliancesRepairs" },
    { title: "Home Safety & Security", logo: "/Safety_logo.jpg", link: "../Categories Home Page/categories.html?category=homeSafetySecurity" },
    { title: "HVAC (Heating, Ventilation, and Air Conditioning)", logo: "/HVAC_logo.jpg", link: "../Categories Home Page/categories.html?category=hvac" },
];

let categoriesContainer = document.querySelector('.categories-container');

let newCategoriesContainer = '';

homeRepairCategoriesData.forEach(category => {
    newCategoriesContainer += `
        <div class="box-container">
            <a class="categories-btn" href="${category.link}">
                <div class="plumbing_container">
                    <img class="plumbing_logo" src="${category.logo}" alt="${category.title} Logo">
                    <p class="plumbing-title">${category.title}</p>
                </div>
            </a>
        </div>
    `;
});

categoriesContainer.innerHTML = newCategoriesContainer;