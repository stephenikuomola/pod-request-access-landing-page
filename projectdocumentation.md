# Pod Request Access Landing Page Docs

## Table of Content

- Overview
    - User stories
    - Features
    - Screenshots
- Process
    - Tools Used
    - Learning Curves
    - Continued Development
    - Resources
- Acknowledgment

## Overview

### User Stories

The user/users would be able to:

- View the optimal layout for the app depending on the their device screen size
- See the hover states for all interactive elements on the page
- Receive an error message when the form is submitted if:
    - The **Email address** field is empty should show "Oops! Please add your email".
    - The email is not formatted correctly should show "Oops! Please check your email”.

### Features

- Different color state when the buttons are clicked
- Different color states and transition when the buttons are hovered

### Screenshots

![Desktop View Pod Request Access Landing Page](./assets/demo/desktop.jpeg)

Desktop View Pod Request Access Landing Page

![Tablet View Pod Request Acess Landing Page ](./assets/demo/tablet.jpeg)

Tablet View Pod Request Acess Landing Page 

![Mobile View Pod Request Access Landing Page](./assets/demo/mobile.jpeg)

Mobile View Pod Request Access Landing Page

## Process

### Tools Used

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Parcel for bundling
- Mobile-First workflow

### Learning Curves

Generally, this was quite a challenging project to engage in as a beginner. I found coding the layout for the different devices quite challenging. I also got to work with CSS proproperties like the `background` porperty, `pseudo-class`, `pseudo-elements` and also got myself introduced to `attribute` selectors which I would go deep into much later in more upcoming projects. 

**Working with the Background property**

Seeing the design of the project on [figma](https://www.figma.com/), I had to ask myself how I would go about implementing the background image on mobile, tablet and desktop. The background-images all seem to have different positions across these devices and how it blended in the background. 

- Starting with the mobile background: From the very beginning I decided I was going to have a header tag which would be were my background image would be and this header class would be given a class of `header`

```html
<header class = "header">
	
<!-- Code here inside the header which contains the rest of the app -->
	
</header>
```

Since I started with a mobile first workflow I had to get the appropriate image for the background at the required dimension and then apply the necessary background properties as seen below. 

1. `background-image`: This property specifes an image to be used as the background of an element. In this case the `header`. 
2. `background-repeat`: The default behaviour of a background-image is set to repeat an image both horizontally and vertically. I used `no-repeat` as I didn’t want the image reapeating. 
3. `background-color`: This property specifies the background color of an element. 
4. `background-blend-mode`: This defines the blending mode of each of the background layer (color and/or image). I used a blending mode value of `multiply` as this seemed to be the closest to the actual design. 
5. `background-size`: This property specifies the size of the background images. I went with a two value syntax here in percentages and this will set the width and height of the backgroud image in percentage of the parent element. 

```css
header{
  background-image: url('../../assets/mobile/image-host.jpg'); 
  background-color: var(--mirage); 
  background-repeat: no-repeat; 
  background-blend-mode: multiply; 
  background-size: 100% 100%; 
}
```

- Styling the tablet background: As the width of the deivce increased and I got to tablet device screen width the layout changed and looking at the design I decided to make some changes to the styling of the background.

```css
header{
    background-image: url('../../assets/tablet/image-host.jpg'), url('../../assets/desktop/bg-pattern-dots.svg'); 
    background-repeat: no-repeat, no-repeat; 
    background-position: right top, 10% bottom;
    background-size: 491px 79%, 20% 10%;  
    background-blend-mode:normal, normal;
    padding-bottom: var(--gap-150); 
  }
```

For this screen size, two background-images were added and they need to be positioned according to how it looked on the design file so this was done using the `background-position` property. The size of the images also need to be adjusted to what I felt was close enough to the design and the `background-blend-mode` was changed to normal for each image respectively. 

- Styling the desktop background: The appearance of the background-images on the desktop was also set by adjusting some of the properties to make it look close enough to the design.

```css
header{
    background-image: url('../../assets/desktop/bg-pattern-dots.svg'),url('../../assets/desktop/image-host.jpg') ; 
    background-repeat: no-repeat, no-repeat; 
    background-position: right 85%, right 40%;
    background-size: 15% 10%, 888px 70%;
  }
```

**Styling Web Forms**

Had a challenging experience learning how to style the form for this project. The layout for this form in the mobile view and tablet view was a bit tough but I am glad I was able to come up with something. To explain this I put the input field of type email and the button inside the `form` element as seen in the code below. 

```html
<form class = "flex form" id = "form" novalidate>
    <div class = "flex email-container">
	     <label class = "sr-only" for "email">Enter your email:</label>
       <input type = "email" id = "email" name = "email" placeholder = "Email address" required/>
       <span class = "error-message" aria-live = "polite"></span>
    </div>
    <button class = "btn">Request Access</button>
</form>
```

- Thinking about styling the form I needed to make the form a flex container because I thought this way it would be easy for me to control how the layout of the child element of the form would look

```css
.flex {dislay: flex;}

.form {flex-wrap: wrap; gap: var(--gap-15)}

/* The flex wrap property specifies whether the flex items are forced onto 
	 onto one line or can wrap into muliptle lines. 
*/
```

- The next step was to target the `email-container` and also make it a flex item and increase the width of 100% as one mobile the input field occupies the full width of the screen and the button element. This was done using `flex-basis` property.

```css
.email-container {flex-basis: 100%; flex-direction: column; gap: var(--gap-8_75);}

.btn {
  flex-basis: 100%; 
  border: none; 
  padding-block-start: var(--gap-8_75); 
  padding-block-end: var(--gap-8_75); 
  color: var(--mirage);
  border-radius: var(--radius-8);
  background-color: var(--aqua-marine);
  font-weight: var(--fw-400); 
  font-size: var(--fs-2); 
  font-family: inherit; 
  cursor: pointer; 
  display: var(--block); 

  /* Transition property for a subtle animation.  */
  transition: background-color 0.6s ease-out; 
}
```

- For the label element I needed a way to make it not visible on the web page but find a way to make it visible to screen readers. I couldn’t have used `display:none` or `visibility:hidden` as this will make it not visible to screen readers as well. I had to do that manually by having a class and adding some properties that do this.

```css
.sr-only {
  position: absolute; 
	white-space: nowrap; 
	overflow: hidden; 
	width: var(--sr-only-width); 
	height: var(--sr-only-height); 
	padding: var(--sr-only-padding);
	margin: var(--sr-only-margin); 
	border-width: var(--sr-only-border-width); 
	top: var(--sr-only-top); 
	left: var(--sr-only-left); 
}
```

- The `aria-live` attribute that has a value of `polite` means that the span element will receive updates that are important to the user to receive but will not be in rapid manner that will disturb the user.
- The input field of type email was style but selecting it using the attribute selector and adding the required properties to style the form as seen below.

```css
input[type=email] {
  outline: none; 
  border: none; 
  background-color: var(--tuna); 
  padding-block-start: var(--gap-8_75); 
  padding-block-end: var(--gap-8_75); 
  padding-inline-start: var(--gap-30); 
  border-radius: var(--radius-8);
  display: var(--block); 
  color: var(--white); 
  font-family: inherit; 
  font-size: var(--fs-2); 
  line-height: var(--line-height-relaxed);
  font-weight: var(--fw-400);
}
```

- The input field also has a **palceholder** text on it which was done using the placeholder attribute on the input field.  The placeholder text was then styled by using the placeholder `pseudo-element`

```css
input[type=email]::placeholder {
  color: var(--white); 
  opacity: 0.5; 
  mix-blend-mode: normal; 
  font-weight: var(--fw-400);
  font-size: var(--fs-2); 
  line-height: var(--line-height-relaxed); 
}
```

- For the tablet and the desktop view some adjustments were made to the styled form element, the input field and the button.
    - For the form a background color needed to be set and the width of the form needs to be set to about 70% of its parent element which is the div element with a class of `header-content`
    - A position of `relative` was set on the form as the span elment with a class of `error-message` will be given a position of `absolute` which will be positioned relative to its nearest ancestor/parent element.
    - The `flex-basis` of the div with class `email-container` and `button` element where set to 40% and 20% respectively. This was done to allow it adjust to the width of the form element.

```css
.form{
    background-color: var(--tuna); 
    width: 70%; 
    border-radius: var(--radius-8);
    padding-left: var(--gap-30);
    padding-block: var(--gap-2_5); 
    padding-right: var(--gap-2_5); 
    position:relative; 
  }

	.email-container {
    flex-basis: 40%; 
    flex-grow: 1;
  }

  input[type=email] {
    background-color: transparent; 
    padding-inline-start: unset; 
    border-radius: unset;
  }

  .btn {
    flex-basis: 20%; 
    flex-grow: 1; 
  }

  .error-message {
    position: absolute;
    bottom: -20px;
    left: 0px;
   
  }
```

**Validting the Form by Setting Custom Error Messages**

There are different types of client side validation which are 

1. Built-in form validation: This does not require much JavaScript as it uses HTML from validation features and it generally tends to perform better than validation with JavaScript. 
2. JavaScript validation is coded using JavaScript and this type of validation is completely customizable. 

This validation process was done making use of JavaScript validation as it was used to create my own custom error messages. To validate the form and the elements inside the from there is an inbuilt API called the constraints validation API and it consists of methods and properties on the form elements DOM interface. These elements include 

- `HTMLButtonElement`
- `HTMLInputElement`
- `HTMLOutput Element`, e.t.c

This API makes available certain properties and methods on the elements above which make it easy to set and define my own custom error messages. The form element also has a `novalidate` attribute and this prevents the browser from performing any validation checks when the form is submitted. It just prevents the form from showing its own error message bubbles and this allows us set our own custom error messages. since we have the required attribute on the input element. The paradigm used to do this was done using OOP.  I created a `FormComponent` class and select the elements i need from the DOM. 

```jsx
class FormComponent {
		#form = document.getElementById("form"); 
    #error = document.querySelector(".error-message"); 
    #email = document.getElementById("email");
}

new FormComponent(); 
```

I also need to account for two seperate states which are in the case when the input field is empty and when the user submits the wrong email format. On both occassion I need to display each of their own error messages to the user. 

Remember I said earlier that the constraint validation API makes available certain properties and methods on the form elements. Also remember that HTML elements are just **Nodes** which are objects. 

I can then use the dot notation “**`.`**” on the input element to get a property called `validity`. This property returns a validity state object that contains several properties describing the state of the element. These properties in the object can help us check for both seperate we spoke about which will help us set the error messages respectively. 

I needed to create a method in the class that will help us show the error message in the case one of those states happen. 

```jsx
class FormComponent {
		#form = document.getElementById("form"); 
    #error = document.querySelector(".error-message"); 
    #email = document.getElementById("email");

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
```

In the method I need to run an if check to check if the value is missing and this was done as seen if the code above doing `element.validity.valueMissing` . This condition wil return a `boolean` **true** if the element has a `required` attribute but no value. If the condition is **true** we insert the corresponding error message in the span element. 

I also had to run another if check to see if the user inputs the correct email format as seen above doing this `element.validity.typeMismatch` . The condition returns **true** if the value is not in the required syntax. This property works for **email** and **url** input types. If the condtion is **true** we insert the corresponding error message in the span element. 

Once the handling of the error messages was established, we need to decide when this would happen. I wanted to show the message when I submit the form and as the user is inputting the value. I needed to listen for the `input` event on the email input element and the `submit` event on the form element then register some event handlers as well and perform some more logic in the handlers. 

```jsx
class FormComponent {
		#form = document.getElementById("form"); 
    #error = document.querySelector(".error-message"); 
    #email = document.getElementById("email");

		constructor() {
			this.#form.addEventListener("submit", this.#submitForm.bind(this)); 
			this.#email.addEventListener("input", this.#handleUserValueInput.bind(this));
		}

		#submitForm(evtObj) {
      if(this.#email.validity.valid) {
        this.#error.innerHTML = ``; 
      } else {
        this.#showErrorMessage(); 
        evtObj.preventDefault(); 
      }
    }

		#handleUserValueInput() {
      if(this.#email.validity.valid) {
        this.#error.innerHTML = ``; 
      } else {
        this.#showErrorMessage(); 
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
```

The `submitForm` handler gets called once the user submits the form either when the user clicks the button or presses **[Enter]**.  As soon as that happens we need to run a check to see if the form is valid and if it is not valid,  we need to then call the `showErrorMessage` method in the form and prevent the form submitted to a form handler.

To be able to know if the form is valid, I need to go back into the validity object and get a valid property using the dot notation `element.validity.valid` and this returns a `boolean` **true** if the element meets all its validation contraints and therefore considered to be valid. It returns false if it fails to meet any contraints. In the case of true we want to ensure the text in the span element is empty and if false we then want to call the `showErrorMessage` function and then prevent the form from submitting by calling the `preventDefault()` on the eventObject. 

The final implementation was to listen for an `input` event on the email so with each change the user makes to the value of the input we also perform a validation check as well and it follows similar steps to what is described above. 

### Continued Development

I hope to still build more on my knowledge on client side form validation and other ways to validate the form. There are definitely better ways this form validation process could be done. I am happy with what I was able to come up with. I also want to learn more on how to style forms and alos make use of the attribute selector, understand more about pseudo-classes and pseudo-elements and how to incorporate them when I am validating a form. 

### Resources

- [Mozilla Developer Network(MDN)](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - To learn about Client Side Form Validation
- [Mozilla Developer Netowrk(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) - To leanr about the input event
- [Mozilla Developer Network(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) - To learn about the submit event
- [Mozilla Developer Network(MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) - To learn about classes in JavaScript.
- [w3schools.com](https://www.w3schools.com/css/css_background.asp) - To learn about CSS backgrounds.

## Acknowledgement

I want to acknowledge FrontEndMentor for this providing this challenge which will enable me test my understanding of JavaScript after just learning some basic concepts.