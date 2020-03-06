// init github.js

const github = new Github;
// init ui.js

const ui = new UI;

const searchUser = document.getElementById("search-user")

searchUser.addEventListener("keyup", (e) => {
    const searchText = e.target.value;
    if (searchText !== "") {
        github.getUser(searchText).then(data => {
            if(data.profile.message === "Not Found") {
                // Alert
               ui.showAlert();
               
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                console.log(data.profile)
                ui.showRepos(data.repos);
                
            }
        });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})