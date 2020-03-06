// init github.js

const github = new Github;
// init ui.js

const ui = new UI;

const searchUser = document.getElementById("search-user")

searchUser.addEventListener("keyup", (e) => {
    const searchText = e.target.value;
    if (searchText !== "") {
        github.getUser(searchText).then(data => {
            if(data.profile.message === "not found") {
                // Alert
               console.log("Not Found");
               
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                console.log(data.profile);
                
            }
        });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})