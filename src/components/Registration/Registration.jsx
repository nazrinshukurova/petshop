const handleSubmit = () => {
    if (!validateForm()) return;
  
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ name, phone, email, message }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert(t("form.successMessage")); // Show the success alert
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(t("form.errorMessage")); // Show the error alert if something goes wrong
      });
  
    reset();
  };
  