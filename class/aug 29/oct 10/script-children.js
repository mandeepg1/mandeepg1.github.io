class Child {
    constructor(firstName, lastName, pic, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.pic = pic;
        this.grade = grade;
    }

    get tableRow(){
        const tr = document.createElement("tr");
        tr.append(this.tableColumn(this.firstName));
        tr.append(this.tableColumn(this.lastName));
        tr.append(this.tableColumn(this.grade));
        tr.onclick = () => {
            //console.log(this.firstName); this works i think
            this.displayDetails(this);
        };

        return tr;
    }

    displayDetails(child) {
        //console.log("hello");
        //console.log(child.firstName);
        const section = document.getElementById("child-details");
        section.innerHTML = "";
        const img = document.createElement("img");
        img.src = "images/" + child.picture;
        section.append(img);
    }

    tableColumn(data){
        const td = document.createElement("td");
        td.textContent = data;
        return td;
    }

}

const displayChildren = () => {
    const table = document.getElementById("children-table");
    const children = [];
    children.push(new Child("Amy", "Smith", "amy.jpg", 3));
    children.push(new Child("Alex", "Smith", "alex.jpg", 3));
    children.push(new Child("Dontae", "Smith", "dontae.jpg", 3));
    children.push(new Child("Jamal", "Smith", "jamal.jpg", 3));

    children.forEach(child => {
        table.append(child.tableRow);

    })
}

window.onload = () => {
    displayChildren();
}