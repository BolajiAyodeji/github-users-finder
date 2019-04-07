
const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger');
        } else if (data.profile.message === 'net::ERR_CONNECTION_TIMED_OUT') {
          ui.showAlert('Network error, try again..', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile);
        }
      })
  } else {
    ui.clearProfile();
  }
})
