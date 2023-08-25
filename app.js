// const submitButton = document.getElementById("submitButton");
// const userForm = document.getElementById("userForm");

submitButton.addEventListener('click', function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const userDetails = {
        name: name,
        email: email
    };

    const userDetailsJSON = JSON.stringify(userDetails);

    localStorage.setItem("userDetails", userDetailsJSON);
    Show(userDetails)

    //alert("User details have been stored in local storage.");
});

// const deleteButton = document.createElement('button');
// deleteButton.textContent = 'Delete';
// deleteButton.addEventListener('click', function() {
//     child.appendChild(deleteButton)
// }

// deleteBtn.function deleteBtn(userDetails){
//     <button type="button" id="submitButton">Submit</button>
//     var deleteBtn 
//     const parentChild = document.getElementById('userList');
//     child.appendChild(deleteBtn)
// }

function Show(userDetails){
    const parentChild  = document.getElementById('userList');
    const child = document.createElement('li');
    child.textContent = userDetails.name + ' - ' + userDetails.email;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        parentChild.removeChild(child); // Remove from UI
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (storedUserDetails && storedUserDetails.name === userDetails.name && storedUserDetails.email === userDetails.email) {
            localStorage.removeItem('userDetails');
        }
    });
    child.appendChild(deleteButton);
    parentChild.appendChild(child);

}