
class GitHub {
  constructor()  {
    this.client_id = 'e9a3759e4c0e7644d72a';
    this.client_secret = '9fd64cdc96ecb9f12ca8f3134ec616d62a82b8d4';
    this.repos_count = 10;
    this.repos_sort = 'created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch
    (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch
    (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
