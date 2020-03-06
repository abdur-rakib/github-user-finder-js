class Github {
    constructor() {
        this.client_id = "Iv1.bde678e02193d4ce";
        this.client_secret = "554f2536b68a3110a049ea34761672e04e598722";
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&secret_id=${this.client_secret}`)

        const profile = await profileResponse.json();

        return {profile: profile};
    }
}