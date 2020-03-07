class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }
    // Show Profile
    showProfile(user) {
        this.profile.style.display = "block";
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
    <div class="card card-body mb-3">
    <h3 class="page-heading mb-3">Latest Repository</h3>
    <div id="repos">
        
    </div>
</div>`

        ;
    }

    // Clear Profile 
    clearProfile() {
        this.profile.innerHTML = "";
    }

    // show Alert

    showAlert() {
        this.clearAlert();

        this.profile.innerHTML = `
        <div class="my-alert">
        <div class="alert alert-danger" role="alert">
            User not found!!!
        </div>
        </div>
        `
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    // Clear Alert

    clearAlert() {
        const alert = document.getElementsByClassName("my-alert");
        if (alert) {
            // alert.remove();
        }
    }
    showRepos(repos) {
        const repoOutput = document.getElementById('repos');
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card-body mb-3">
                <div class="row">
                    <div class="col-md-6 mr-auto">
                        <a class="mb-6" href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary p-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary p-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success p-2">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `;
        });
        repoOutput.innerHTML = output;
    }
}