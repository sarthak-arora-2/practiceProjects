// const testimonials = [
//     {
//       name: "Cherise G",
//       photoUrl:
//         "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
//       text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
//     },
//     {
//       name: "Rosetta Q",
//       photoUrl:
//         "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
//       text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
//     },
//     {
//       name: "Constantine V",
//       photoUrl:
//         "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
//       text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
//     },
//   ];
  
//   const imgEl = document.querySelector("img");
//   const textEl = document.querySelector(".text");
//   const usernameEl = document.querySelector(".username");
  
//   let idx = 0;
  
//   updateTestimonial();
  
//   function updateTestimonial() {
//     let { name, photoUrl, text } = testimonials[idx];
//     imgEl.src = photoUrl;
//     textEl.innerText = text;
//     usernameEl.innerText = name;
//     idx++;
//     if (idx === testimonials.length) {
//       idx = 0;
//     }
//     // idx = (idx + 1) % testimonials.length;

const testimonials = [
  {
    name: "Monkey D. Luffy",
    imgUrl: "https://miro.medium.com/v2/resize:fit:1200/0*j7sVnq-dE0XWdS12.jpeg",
    content: "I will be the King of the Pirates! Without You, I Won't... I Can't Become the Pirate King!!"
  },
  {
    name: "Zoro",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZa_823rX-kvEjleNowWtAKTvrEYPC7RGzQ&s",
    content: "You need to accept the fact that you're not the best and have all the will to strive to be better than anyone you face."
  },
  {
    name: "Sanji",
    imgUrl: "https://cdn.oneesports.gg/cdn-data/2023/10/Anime_OnePiece_StrawHatPirates_Sanji_PostTimeskip_Wallpaper3.jpg",
    content: "Leave This Guy's Key To Me, I'll Do What You Can't Do; You Do What I Can't Do. Think Carefully! Read The Situation. If You're Here, There's Got To Be A Way Robin-chan Can Be Saved! Usopp!"
  },
]
    
let i = 0

updateTestimonial()  // Does the first call to print first object testimonial

function updateTestimonial(){
  if (i === testimonials.length){
    i = 0
  }
  let imageUrl = document.querySelector(".dp")
  let content = document.querySelector(".content")
  let name = document.querySelector(".name")
  // console.log(imageUrl)
  imageUrl.src = testimonials[i].imgUrl
  content.innerHTML = testimonials[i].content
  name.innerHTML = testimonials[i].name
  i = i + 1
}
setInterval(updateTestimonial, 5000);