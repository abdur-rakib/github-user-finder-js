class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }
    // Show Profile
    showProfile(user) {
        this.profile.style.display="block";
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a class="btn btn-sm btn-primary btn-block mb-4" href="${user.html_url}" target="_blank">View Profile</a>
                </div>
            <div class="col-md-9">
                <span class="badge badge-primary p-2 mb-1">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary p-2 mb-1">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success p-2 mb-1">Followers: ${user.followers}</span>
                <span class="badge badge-info p-2 mb-1">Following: ${user.following}</span>
                
                <ul class="list-group mt-4">
                    <li class="list-group-item"><span class="font-weight-bold">Company</span>: ${user.company}</li>
                    <li class="list-group-item"><span class="font-weight-bold">Website/Blog:</span> ${user.blog}</li>
                    <li class="list-group-item"><span class="font-weight-bold">Location:</span> ${user.location}</li>
                    <li class="list-group-item"><span class="font-weight-bold">Member Since:</span> ${user.created_at}</li>
                
            </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repository</h3>
    <div id="repos"></div>
        `;
    }

    // Clear Profile 
    clearProfile() {
        this.profile.innerHTML = "";
    }
}