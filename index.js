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

 let containerEl = document.getElementById("container-el");
 let heartEl = document.getElementById("heart-el");
 let likeEl = document.querySelector("likes-el");


 // loop through posts array and render each post
    
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
           <img src="images/icon-heart.png" alt="icon-heart" class="icon-heart" id="heart-el">
           <img src="images/icon-comment.png" alt="icon-heart" class="icon-comment">
           <img src="images/icon-dm.png" alt="icon-heart" class="icon-dm">
           <p class="likes" id="likes-el">${posts[i].likes} likes</p>
           </div>
           <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
           </div>
       </div>
    </div>
        `

        containerEl.innerHTML += postEl;
    }

}
   
renderPosts();


