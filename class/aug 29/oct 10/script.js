class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item () {
        const section = document.createElement("section");
        section.classList.add("dog");
        
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const ul = document.createElement("ul");
        section.append(ul);
        ul.append(this.listItem(this.breed));
        ul.append(this.listItem(this.color));
        ul.append(this.listItem("age; " + this.age));

        const pic = document.createElement("img");
        section.append(pic);
        pic.src = "images/" + this.pic;

        return section;
    }

    // for picture method i could use the following
    // picture(info) { const pic....+ info; return pic}
    //then in getitem section.append(this.picture(this.pic))

    listItem(info) {
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}

const showDogs = () => {
    const dogs = [];
    const dogList = document.getElementById("dog-list");
    dogs.push(new Dog("fred","rot","brown", 4, "lg", "pic-ofDog"));
    dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "gld.jpg");)
    
    dogs.forEach(dog => {
        //console.log(dog.title);
       
        // let p = document.createElement("p");
        //p.innerHTML = (dog.title);
        //dogList.append(p);

        dogList.append(dog.item);
    })

}

window.onload = () => {
    showDogs();
}
