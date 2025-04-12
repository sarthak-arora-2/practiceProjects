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
    setTimeout(()=>{
      updateTestimonial()
    }, 5000)
  }
  updateTestimonial()
  