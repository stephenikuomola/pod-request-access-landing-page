// The novalidate attribute added to the form element will ensure that the browser does not perform aan automatic validation 

// The novalidate attribute will stop the form from showing its owm error bubbles and this can allow me to instead display my own custom error message. 

class FormComponent {
    #form = document.getElementById("form"); 
    #error = document.querySelector(".error-message"); 
    #email = document.getElementById("email"); 

    constructor() {
      this.#form.addEventListener("submit", this.#submitForm.bind(this)); 
      this.#email.addEventListener("input", this.#handleUserValueInput.bind(this)); 
    }

    #handleUserValueInput() {
      if(this.#email.validity.valid) {
        this.#error.innerHTML = ``; 
      } else {
        this.#showErrorMessage(); 
      }
    }


    #submitForm(evtObj) {
      if(this.#email.validity.valid) {
        this.#error.innerHTML = ``; 
      } else {
        this.#showErrorMessage(); 
        evtObj.preventDefault(); 
      }
    }

    #showErrorMessage() {
      if(this.#email.validity.valueMissing) {
        this.#error.innerHTML = `Oops! Please add your email`; 
      }

      
      if(this.#email.validity.typeMismatch) {
        this.#error.innerHTML = `Oops! Please check your email`; 
      }

    }
}


new FormComponent(); 