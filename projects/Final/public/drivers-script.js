const getAllDrivers = async () =>{
    try {
        return (
        //   await fetch("https://mongoose-recipes.onrender.com/api/recipes")
        await fetch("/api/drivers")
        ).json();
      } catch (error) {
        console.log(error);
      }
}

const showDrivers = async () => {
    let drivers = await getAllDrivers();
    //console.log(drivers);
    const DriverSection = document.getElementById("about-driver");
  
    drivers.forEach((driver) => {
      DriverSection.append(getDriver(driver));
    });
  }
  

  const getDriver = (driver) => {
    const section = document.createElement("section");
    section.classList.add("driver-box");

    const driverImg = document.createElement("img");
    driverImg.classList.add("driver-pic");
    driverImg.src = driver.img;
    section.append(driverImg);

    const section2 = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.classList.add("driver-name");
    h3.innerHTML = driver.name;
    section2.append(h3);

    section2.append(getDriverInfo(driver));

    const details = document.createElement("div");
    details.classList.add("driver-details");

    const dLink = document.createElement("a");
    dLink.innerHTML = "&#x2715;";
    dLink.id = "delete-link";
    details.append(dLink);

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    eLink.id = "edit-link";
    details.append(eLink);

    eLink.onclick = (e) => {
        e.preventDefault();
        document.getElementById("add-section").classList.remove("transparent");
        document.getElementById("adding-driver").innerHTML = "<u>Editing Game</u>";
        populateEditForm(driver || {})
      };

    dLink.onclick = (e) => {
        e.preventDefault();
        deleteDriver(driver);
    };

    section2.append(details);
    section.append(section2);

    return section;
}

const getDriverInfo = (driver) => {
    const p = document.createElement("p");
    p.classList.add("driver-info", "red-info");
    
    p.innerHTML = `<strong><span class="black-text">Age:</span></strong> ${driver.age}<br> <strong><span class="black-text">Team: </span></strong>${driver.team}<br>
    <strong><span class="black-text">Career Stats:</span></strong> ${driver["stats"]}<br>`;
    
    return p;
}

let drivers = [];
const addDriver = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-driver-form");
    const formData = new FormData(form);
    // console.log(formData);
    let response;

    try {
        if (form._id.value && form._id.value !== "-1") {
            response = await fetch(`/api/drivers/${form._id.value}`, {
                method: "PUT",
                body: formData,
            });
        } else {
            formData.delete("_id");
            response = await fetch("/api/drivers", {
                method: "POST",
                body: formData,
            });
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const updatedDriverIndex = drivers.findIndex((g) => g._id === data._id);
        if (updatedDriverIndex !== -1) {
            drivers[updatedDriverIndex] = data;
            console.log("Drivers Array Updated:", drivers);
            showDrivers();
        }
    } catch (error) {
        console.error("Error:", error);
    }
    reloadPage();

    document.querySelector(".form-class").classList.add("transparent");
};

const reloadPage = () => {
    location.reload();
  };

const populateEditForm = (driver) => {
    const form = document.getElementById("add-edit-driver-form");
    form._id.value = driver._id;
    form.name.value = driver.name;
    form.age.value = driver.age;
    form.team.value = driver.team;
    form.stats.value = driver.stats;
};

const editDriver = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-driver-form");
    const formData = new FormData(form);
    let response;
  
    if (form._id.value == -1) {
        formData.delete("_id");
  
        response = await fetch("/api/drivers", {
            method: "POST",
            body: formData,
        });
    } else {
        console.log(...formData);
  
        response = await fetch(`/api/drivers/${form._id.value}`, {
            method: "PUT",
            body: formData,
        });
    }
  
    if (response.status != 200) {
        console.log("Error posting data");
    }
  
    let result = await response.json();
    //console.log(result);

    if (form._id.value != -1) {
        const driver = await getAllDrivers(form._id.value);
        getDriver(driver);
    }

    document.querySelector(".form-class").classList.add("transparent");
     showDrivers();
     //resetForm();
     reloadPage();
  };

const deleteDriver = async(driver) => {
    let response = await fetch(`/api/drivers/${driver._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });  
  
    if (response.status != 200) {
        console.log("error deleting");
        return;
    }
  
    let result = await response.json();
    showDrivers();
    document.getElementById("about-driver").innerHTML = "";
    resetForm();
  }

const resetForm = () => {
    const form = document.getElementById("add-edit-driver-form");
    form.reset();
    form.elements['_id'].value == "-1";
  };



  window.onload = () => {
    showDrivers();
    document.getElementById("add-section").classList.add("transparent");

    const form = document.getElementById("add-edit-driver-form");

    document.getElementById("add-driver-info").addEventListener("click", () => {
        document.getElementById("add-section").classList.remove("transparent");
    });

    form.onsubmit = (e) => {
        e.preventDefault();
        if (form._id.value === "-1") {
            addDriver(e);
        } else {
            editDriver(e);
        }
    };
};
