const getDrivers = async () => {
    const url = "https://mandeepg1.github.io/projects/part5/drivers.json";
    try {
        const response = await fetch(url);
        return await response.json();
      } catch (error) {
        console.log(error);
      }
};

const showDrivers = async () => {
    const drivers = await getDrivers();
    const DriverSection = document.getElementById("about-driver");

    drivers.forEach((driver) => {
        console.log("Driver data:", driver);
        DriverSection.append(getDriver(driver));
    });
}

const getDriver = (driver) => {
    const section = document.createElement("section");

    const driverImg = document.createElement("img");
    driverImg.classList.add("driver-pic");
    driverImg.src = driver.img;
    section.append(driverImg);
    

    const section2 = document.createElement("section");
    //section2.classList.add("driver-name");

    const h3 = document.createElement("h3");
    h3.classList.add("driver-name");
    h3.innerHTML = driver.name;
    section2.append(h3);

    section2.append(getDriverInfo(driver));
    

    section.append(section2);

    return section;
}

const getDriverInfo = (driver) => {
    const p = document.createElement("p");
    p.classList.add("driver-info", "red-info");
    
    p.innerHTML = `<strong><span class="black-text">Age:</span></strong> ${driver.age}<br> <strong><span class="black-text">Team: </span></strong>${driver.team}<br>
    <strong><span class="black-text">Career Stats:</span></strong> ${driver.stats}<br>`;
    
    return p;
}


window.onload = () => showDrivers();