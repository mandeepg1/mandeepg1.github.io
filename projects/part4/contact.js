    const showEmail = async (e) => {
      e.preventDefault();
      const result = document.getElementById("result");
      let response = await getEmail();

      if (response.status === 200) {
        result.innerHTML = "Thank you for contacting us. We will be in touch shortly!";
        result.classList.add("success-message");

        const form = document.getElementById("contact-form");
        const inputElements = form.querySelectorAll('input, textarea');
        inputElements.forEach((input) => {
          input.value = '';
        });
      } else {
        result.innerHTML = "Sorry, your email couldn't be sent.";
        result.classList.add("error-message");
      }
    };


    const getEmail = async (e) => {
      const form = document.getElementById("contact-form");
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const result = document.getElementById("result");
      result.innerHTML = "Please wait...";
      result.classList.add("please-wait");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });
        result.classList.remove("please-wait");
        return response;
      } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML =
          "Sorry your email couldn't be sent";
      }
    };

    document.getElementById("contact-form").onsubmit = showEmail;
  