
const github = new GitHub;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          alert('User not found');
        } else {
          // Show Profile
        }
      })
  } else {
    // Clear Profile
  }
})
