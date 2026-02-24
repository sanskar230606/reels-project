const reels = [
  {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    saveCount: 310,
    isSaved: false,
    repostCount: 45,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "Dark mode > light mode. Change my mind.",
    video: "./m1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    username: "designbysan",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    saveCount: 205,
    isSaved: true,
    repostCount: 22,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "UI tip: Padding is personality. Give your elements some space.",
    video: "./r2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    username: "frontend.ninja",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    saveCount: 540,
    isSaved: false,
    repostCount: 76,
    isReposted: true,
    isFollowed: true,
    ismuted:true,
    caption: "When flexbox finally aligns the way you wanted 😭🔥",
    video: "./e3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    username: "travelwithriya",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    saveCount: 1200,
    isSaved: true,
    repostCount: 134,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "My solo Bali trip changed everything 🌴",
    video: "./s4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    username: "daily.dev.quotes",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    saveCount: 98,
    isSaved: false,
    repostCount: 12,
    isReposted: false,
    isFollowed: true,
    ismuted:true,
    caption: "Code. Sleep. Repeat. That’s the cycle.",
    video: "./m5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    username: "fitnessbymegha",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    saveCount: 430,
    isSaved: true,
    repostCount: 58,
    isReposted: false,
    isFollowed: true,
    ismuted:true,
    caption: "No gym? No problem. Do this 12-min workout at home.",
    video: "./e1.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    username: "streetfoodlover",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    saveCount: 2100,
    isSaved: true,
    repostCount: 300,
    isReposted: true,
    isFollowed: false,
    ismuted:true,
    caption: "Late night vibes // piano version 🎹✨",
    video: "./r1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    username: "musicbytara",
    likeCount: 14500,
    isLiked: false,
    commentCount: 267,
    shareCount: 73,
    saveCount: 250,
    isSaved: false,
    repostCount: 33,
    isReposted: false,
    isFollowed: true,
    ismuted:true,
    caption: "You won’t believe this burger exists 🤯🍔",
    video: "./m3.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    username: "techreviews101",
    likeCount: 23180,
    isLiked: true,
    commentCount: 481,
    shareCount: 120,
    saveCount: 610,
    isSaved: true,
    repostCount: 80,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "The most underrated smartphone of 2024 📱",
    video: "./s2.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    username: "learnanimations",
    likeCount: 18740,
    isLiked: false,
    commentCount: 350,
    shareCount: 92,
    saveCount: 420,
    isSaved: false,
    repostCount: 60,
    isReposted: true,
    isFollowed: true,
    ismuted:true,
    caption: "GSAP can literally change your career. Start today.",
    video: "./e6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    username: "coderlife",
    likeCount: 11200,
    isLiked: false,
    commentCount: 210,
    shareCount: 45,
    saveCount: 180,
    isSaved: false,
    repostCount: 20,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "Console.log is my best friend.",
    video: "./m7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    username: "artbyneha",
    likeCount: 25400,
    isLiked: true,
    commentCount: 390,
    shareCount: 88,
    saveCount: 500,
    isSaved: true,
    repostCount: 70,
    isReposted: false,
    isFollowed: true,
    ismuted:true,
    caption: "Sketching my thoughts away 🎨",
    video: "./e2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    username: "startupdiaries",
    likeCount: 32100,
    isLiked: false,
    commentCount: 510,
    shareCount: 134,
    saveCount: 720,
    isSaved: false,
    repostCount: 95,
    isReposted: true,
    isFollowed: false,
    ismuted:true,
    caption: "Building in public hits different.",
    video: "./s1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    username: "foodieheaven",
    likeCount: 44100,
    isLiked: true,
    commentCount: 720,
    shareCount: 201,
    saveCount: 1300,
    isSaved: true,
    repostCount: 160,
    isReposted: true,
    isFollowed: true,
    ismuted:true,
    caption: "This pasta is unreal 🤤",
    video: "./m2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    username: "traveljunkie",
    likeCount: 29800,
    isLiked: false,
    commentCount: 430,
    shareCount: 110,
    saveCount: 610,
    isSaved: false,
    repostCount: 72,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "Mountains > Beaches. Always.",
    video: "./r3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    username: "jsmastery",
    likeCount: 37600,
    isLiked: true,
    commentCount: 580,
    shareCount: 160,
    saveCount: 980,
    isSaved: true,
    repostCount: 140,
    isReposted: true,
    isFollowed: true,
    ismuted:true,
    caption: "Async/await explained in 30 seconds.",
    video: "./e4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
    username: "yogawithasha",
    likeCount: 15800,
    isLiked: false,
    commentCount: 260,
    shareCount: 70,
    saveCount: 310,
    isSaved: false,
    repostCount: 40,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "Morning yoga = better mood 🌞",
    video: "./m4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    username: "photographyworld",
    likeCount: 46200,
    isLiked: true,
    commentCount: 840,
    shareCount: 220,
    saveCount: 1500,
    isSaved: true,
    repostCount: 210,
    isReposted: true,
    isFollowed: true,
    ismuted:true,
    caption: "Golden hour hits different 📸",
    video: "./s3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    username: "devhumor",
    likeCount: 19300,
    isLiked: false,
    commentCount: 305,
    shareCount: 90,
    saveCount: 370,
    isSaved: false,
    repostCount: 48,
    isReposted: false,
    isFollowed: false,
    ismuted:true,
    caption: "It works on my machine 😂",
    video: "./e5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    username: "motivationalhub",
    likeCount: 28700,
    isLiked: true,
    commentCount: 410,
    shareCount: 150,
    saveCount: 860,
    isSaved: true,
    repostCount: 120,
    isReposted: true,
    isFollowed: true,
    ismuted:true,
    caption: "Small steps daily = big results.",
    video: "./m6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];
let allreels = document.querySelector(".allreels");

function addData(){
  let sum = ``;
  reels.forEach(function(q,idx){
    sum+=`<div class="reel">
                    <video autoplay loop playsinline ${q.ismuted?'muted':''} src="${q.video}"></video>
                    <div id=${idx} class="mute">
                      ${q.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                    </div>
                      <div class="bottom">
                        <div class="user">
                            <img src="${q.userprofile}" alt="">
                            <h4>${q.username}</h4>
                            <button id=${idx} class="button" >${q.isFollowed?'unfollow':'follow'}</button>
                        </div>
                        <h3>${q.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${q.isLiked?'<i class="love ri-heart-3-fill">':'<i class="ri-heart-3-line">'}</i></h4>
                            <h6>${q.likeCount>10000?`${(q.likeCount/1000).toFixed(2)}k`:`${q.likeCount}`}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${q.commentCount>10000?`${(q.commentCount/1000).toFixed(2)}k`:`${q.commentCount}`}</h6>
                        </div>
                        <div id=${idx} class="repost">
                            <h4 class="repost-icon">${q.isReposted?'<i class="fa-regular fa-square-check"></i>':'<i class="fa-solid fa-retweet"></i>'}</h4>
                            <h6>${q.repostCount>10000?`${(q.repostCount/1000).toFixed(2)}k`:`${q.repostCount}`}</h6>
                        </div>
                        <div id=${idx} class="share">
                            <h4 class="share-icon"><i class="ri-send-ins-line"></i></h4>
                            <h6>${q.shareCount>10000?`${(q.shareCount/1000).toFixed(2)}k`:`${q.shareCount}`}</h6>
                        </div>
                        <div id=${idx} class="save">
                            <h4 class="save-icon">${q.isSaved?'<i class="fa-solid fa-bookmark"></i>':'<i class="ri-bookmark-line"></i>'}</h4>
                            <h6>${q.saveCount>10000?`${(q.saveCount/1000).toFixed(2)}k`:`${q.saveCount}`}</h6>
                        </div>
                    </div>
                </div>`;
  });
  allreels.innerHTML = sum;
};
addData();
allreels.addEventListener("click",(dets)=>{
  if(dets.target.className == "like"){
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked= true;
    }else{
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked= false;
    }
    addData();
  }
  if(dets.target.className == "button"){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true;
    }
    else{
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }
  if(dets.target.className == "mute"){
    if(!reels[dets.target.id].ismuted){
      reels[dets.target.id].ismuted = true;
    }
    else{
      reels[dets.target.id].ismuted = false;
    }
    addData();
  }
  if(dets.target.className == "share"){
    reels[dets.target.id].shareCount++;
    addData();
  }
  if(dets.target.className == "repost"){
    if(!reels[dets.target.id].isReposted){
      reels[dets.target.id].repostCount++;
      reels[dets.target.id].isReposted= true;
    }else{
      reels[dets.target.id].repostCount--;
      reels[dets.target.id].isReposted= false;
    }
    addData();
  }
  if(dets.target.className == "save"){
    if(!reels[dets.target.id].isSaved){
      reels[dets.target.id].saveCount++;
      reels[dets.target.id].isSaved= true;
    }else{
      reels[dets.target.id].saveCount--;
      reels[dets.target.id].isSaved= false;
    }
    addData();
  }
})