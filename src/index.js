const products = {
    data: [
        {
            pid: "jacket",
            name: "jacket green",
            price: "49$",
            url: "https://avecsport.com/images/thumbs/0021518_elite-rain-jacket-green.jpeg"
        },
        {
            pid: "jacket",
            name: "jacket black",
            price: "29$",
            url: "https://m.media-amazon.com/images/I/61+qB04js4L._AC_UY1000_.jpg"
        },
        {
            pid: "t-shirts",
            name: "t-shirts black",
            price: "9$",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ArrGyK5rnw1vRnD32OA1OpAzGUp9XEacXFfxoJhTuw&s"
        },
        {
            pid: "t-shirts",
            name: "t-shirts white",
            price: "9$",
            url: "https://cdn.shopify.com/s/files/1/1899/4143/products/A33957-MERCERISED-LOOSE-FIT-TSHIRT-WHITE-SCANLANTHEODORE-0_4c94e3e7-53b1-4574-95f7-455ed7099681.jpg?v=1698026630"
        },
        {
            pid: "jeans",
            name: "jeans dark",
            price: "19$",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIqLGajJQmoujt2GnrfVf2s29hMDkEr03AWimn3tNkg&s"
        },
        {
            pid: "jeans",
            name: "jeans light",
            price: "49$",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFpIthEH1b4wcZ6kKx-q5A6wrNQ5xPTa086DUsOIJvg&s"
        },
        {
            pid: "watches",
            name: "watch white",
            price: "44$",
            url: "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwae7eeac3/images/products/28000121_fr.jpg?sw=1660&sh=1660"
        },
        {
            pid: "watches",
            name: "watch black",
            price: "43$",
            url: "https://m.media-amazon.com/images/I/51QBJ7Ag9oL._AC_UY1000_.jpg"
        },

    ]
};

const init = () => {
    renderAllProducts(products.data);
    createBtn();
    addingEvents();
}

const addingEvents = () => {
    document.querySelector(".wrapper__input").addEventListener("input", getInputValue);

    document.querySelectorAll(".wrapper__btn .btn").forEach((item) => {
        item.addEventListener("click", filterByBtn);
    })

}


//Filtered products
const getInputValue = (e) => {
    const value = e.target.value.trim().toLowerCase();
    filterProducts((item) => (
        item.querySelector(".wrapper__item-descr")
            .textContent.toLowerCase().includes(value)
    ));
}

const filterProducts = (fn) => {
    const items = document.querySelectorAll(".wrapper__item");
    items.forEach((item) => item.classList.toggle("hide", !fn(item)))
}


// Button search products
const btnId = [
    { id: "all", name: "Все" },
    { id: "t-shirts", name: "Футболки" },
    { id: "jeans", name: "Джинсы" },
    { id: "jacket", name: "Бомбер" },
    { id: "watches", name: "Часы" }
];


const createBtn = (active = "all") => {
    const btn = document.querySelector(".wrapper__btn");
    btnId.forEach((item) => {
        const setActive = active === item.id ? "btn-dark wrapper__btn-active" : "btn-dark"
        btn.innerHTML += `
      <button type="button" class="btn ${setActive}" data-id=${item.id}>${item.name}</button>
      `;
    });
}

const filterByBtn = (e) => {
    let active = e.target.dataset.id;
    document.querySelectorAll(".wrapper__btn .btn").forEach((item) => {
        item.classList.remove("wrapper__btn-active");
    });
    e.target.classList.add("wrapper__btn-active");
    filterProducts((item) => {
        if (active === "all") {
            return true;
        } else {
            return item.dataset.id === active ? true : false;
        }
    });
}

// All products
const renderAllProducts = (data) => {
    data.forEach(renderProduct);
}

const renderProduct = (data) => {
    const { pid, name, price, url } = data;
    const wrapper = document.querySelector(".wrapper__grid-container");
    wrapper.innerHTML += `
    <div class="wrapper__item" data-id=${pid}>
        <img src=${url} alt="img">
        <h2 class="wrapper__item-descr">${name}</h2>
        <div class="wrapper__item-price">${price}</div>
        <button class="btn btn-primary wrapper__item-btn">Add</button>
    </div>
    `;
    // const template = `
    //  <div class="wrapper__item" data-id=${pid}>
    //      <img src=${url} alt=${name}>
    //      <div class="wrapper__item-descr">${name}</div>
    //      <div class="wrapper__item-price">${price}</div>
    //      <button class="btn btn-primary wrapper__item-btn">Add</button>
    //  </div>
    // `;

    // wrapper.insertAdjacentHTML('beforeend', template);
}

init();


