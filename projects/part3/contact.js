const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";
  
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      if (response.status === 200) {
        result.innerHTML = "Thank you for contacting us. We will be in touch shortly!";
        result.classList.add("success-message");
      } else {
        result.innerHTML = "Sorry, your email couldn't be sent.";
        result.classList.add("error-message");
      }
    } catch (error) {
      console.log(error);
      result.innerHTML = "Sorry, your email couldn't be sent.";
      result.classList.add("error-message");
    }
  };
  
  document.getElementById("contact-form").onsubmit = handleFormSubmit;
  