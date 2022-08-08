const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


 let containerEl = document.getElementById("container-el")
 


 //loop through posts array and render each post
    
 let renderPosts = () => {
        for (let i = 0; i < posts.length; i++) {
        let postEl = ""
        postEl += `
        
        <div class="post">
        <div class="profile-section">
            <img src="${posts[i].avatar}" alt="${posts[i].avatar}" class="avatar-vangogh">
           <div class="profile-info">
               <h3>${posts[i].name}</h3>
               <p>
                   ${posts[i].location}
               </p>
           </div>
       </div>
       <div class="profile-img">
           <img src="${posts[i].post}" alt="profile-img" class="profile-img-post">
           <div class="likes-info">
           <div class="icons">
           <i class="bi bi-heart-fill icon-heart text-muted" id="heart-el"></i>
            <i class="bi bi-chat icon-comment text-muted"></i>
            <i class="bi bi-send icon-dm text-muted"></i>
           <p class="likes" id="${i}">${posts[i].likes} likes</p>
           </div>
           <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
           </div>
       </div>
    </div>
        `
        
        containerEl.innerHTML += postEl
        
    }
}
renderPosts();



// increase the likes by 1
 count = 0
 const postContainers = document.querySelectorAll(`.post`)
 postContainers.forEach((postContainer) => {
    const heart = postContainer.querySelector(`.icon-heart`)
    const likes = postContainer.querySelector(`.likes`)

    heart.addEventListener(`click`, () => {
        postContainers.forEach((item) => {
            if(item !== postContainer) {
                count = 0
            }
        })

        heart.classList.toggle(`clicked`)
        if(heart.classList.contains(`clicked`)) {
            count++
            const newLike = posts[likes.id].likes + count
            likes.innerHTML = `${newLike} likes`
            console.log(likes)
        } else {
            count--
            const newLike = posts[likes.id].likes + count + 1
            likes.innerHTML = `${newLike} likes`
        }
    })
 })


 // change the heart color when clicked

 const heartEl = document.querySelectorAll(`.bi-heart-fill`);

heartEl.forEach(function (hearts) {
  hearts.addEventListener(`click`, function (e) {
    const liked = e.currentTarget;
    if (liked.classList.contains(`text-muted`)) {
      liked.classList.remove(`text-muted`);
    } else {
      liked.classList.add(`text-muted`);
    }
  });
});
