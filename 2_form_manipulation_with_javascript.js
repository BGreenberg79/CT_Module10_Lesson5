// Task 2 Handle Form Submission and store user input into an object

function FormSubmissions(name, email, message){
    this.name = name;
    this.email = email;
    this.message = message;
};

let submissionsArray = []
// Set Up constructor and place to store objects for submissions

function handleSubmission(event){
    event.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name == "" || email == "" || message == "") {
        alert("Form cannot be submitted with blank fields");
        return false;}
    const newSubmission = new FormSubmissions(name, email, message);
    submissionsArray.push(newSubmission);
    console.log(newSubmission);
    console.log(submissionsArray);
    document.getElementById("jsForm").reset();
};
// Function finds user inputs values for name, email, and message and uses those to instantiate newSubmission object instances
// Then pushes those instances to the submissions array and logs both the new submission and the updated array to console.log before resetting 

// Task 3 Form Validation Via Javascript

// function validateForm(event) {
//     event.preventDefault()
//     const nameInput = document.getElementById("name").value;
//     const emailInput = document.getElementById("email").value;
//     const messageInput = document.getElementById("message").value;
//     if (nameInput == "" || emailInput == "" || messageInput == "") {
//         alert("Form cannot be submitted with blank fields");
//         return false;
//     }
// };
// Ended up combining with on submit function to make code smoother instead of trying to make two functions work with html onsubmit