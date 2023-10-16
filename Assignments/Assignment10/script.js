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
        infoDiv.classList.add("info"); // Use the "info" class here instead of "middle"
        infoDiv.innerHTML = this.details;
    
        container.appendChild(pic);
        container.appendChild(infoDiv);
    
        section.appendChild(container);
    
        return section;
    }
    
}

const showToys = () => {
    const toys = [];
    const toyList = document.getElementById("toys");

    toys.push(new coolToys("Baby Yoda", "19.99", "4-10", "5 stars", "baby-yoda.jpg"));
    toys.push(new coolToys("Dinosaur","11.99", "4-10" , "4 stars", "dinosaur.jpg"));
    toys.push(new coolToys("Lego","11.99", "4-10" , "4 stars", "lego.jpg"));
    toys.push(new coolToys("Red Car","11.99", "4-10" , "4 stars", "red-car.jpg"));
    toys.push(new coolToys("Vader & Clone Troopers","11.99", "4-10" , "4 stars", "vader-trooper.jpg"));
    toys.push(new coolToys("Plane","11.99", "4-10" , "4 stars", "plane.png.jpg"));

    toys.forEach((toy) => {
        toyList.appendChild(toy.createToyElement());
    });
};

window.onload = () => {
    showToys();
};


