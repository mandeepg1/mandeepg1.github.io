class coolToys {
    constructor(title, price, age, rating, pic) {
        this.title = title;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get details() {
        return `<h3>${this.title}</h3><p>Price: $${this.price}</p>
        <p>Age Range: ${this.age}</p><p>Rating: ${this.rating}</p>`;
    }

    getToyItem() {
        return {
            title: this.title,
            price: this.price,
            age: this.age,
            rating: this.rating,
            pic: this.pic,
        };
    }

    createToyElement() {
        const section = document.createElement("section");
        section.classList.add("toy");

        const container = document.createElement("div");
        container.classList.add("container");

        const pic = document.createElement("img");
        pic.src = `images/${this.pic}`;
        pic.alt = this.title;
        pic.classList.add("image");

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("middle");
        infoDiv.classList.add("text");
        infoDiv.innerHTML = this.details;

        container.appendChild(pic);
        container.appendChild(infoDiv);

        section.appendChild(container);

        pic.addEventListener("mouseover", () => {
            infoDiv.style.opacity = "1";
            pic.style.opacity = "0.3";
        });

        pic.addEventListener("mouseout", () => {
            infoDiv.style.opacity = "0";
            pic.style.opacity = "1";
        });

        return section;
    }
}

const showToys = () => {
    const toys = [];
    const toyList = document.getElementById("toys");

    toys.push(new coolToys("Baby Yoda", "19.99", "4-10", "4 stars", "baby-yoda.jpg"));
    toys.push(new coolToys("Dinosaur","11.99", 4-10 , "4 stars", "dinosaur.jpg"));

    toys.forEach((toy) => {
        toyList.appendChild(toy.createToyElement());
    });
};

window.onload = () => {
    showToys();
};


