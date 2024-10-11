// console.log("hello");


function getTimeString (time){
    const hour=parseInt(time/3600)
    let remainingSeconds=time % 3600
    const minute=parseInt(remainingSeconds/60)
    remainingSeconds=remainingSeconds % 60
    return `${hour} hour ${minute} minute ${remainingSeconds} second ago;`
}

console.log(getTimeString(4395));

const removeActionClass=()=>{

}

// fetch , load and show catagories on display


// create load-catagories
const loadCatagory =()=> {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCatagory(data.categories))
    .catch(error => console.log(error))
    
}

//create load video catagories
const videoCatagory =()=> {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data =>displayVideos(data.videos))
    .catch(error => console.log(error))
    
}

//load catagory videos
const loadCategoryVideo = (id) =>{
    // alert(id)

    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
        const activeBtn=document.getElementById(`btn-${id}`)
        // console.log(activeBtn);
        
        activeBtn.classList.add('active')
        displayVideos(data.category)})
    .catch(error => console.log(error))
    
}

// card demo

// const cardDemo={
//   "category_id": "1001",
//   "video_id": "aaaa",
//   "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//   "title": "Shape of You",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//       }
//   ],
//   "others": {
//       "views": "100K",
//       "posted_date": "16278"
//   },
//   "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

//display videos on cards
const displayVideos=(videos)=>{
    const videoContainer=document.getElementById('video')
    videoContainer.innerHTML="";

    if(videos.length == 0){
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML=`<div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
        <img src="assets/Icon.png">
        <h2>No content here in this category</h2>
        </div>`
        return
    }else{
        videoContainer.classList.add('grid')

    }
    // console.log(videos);

    videos.forEach((video)=>{
        console.log(video);
        const card=document.createElement('div')
        card.classList='card card-compact '
        card.innerHTML=`<figure class="h-[200px] relative">
        <img class="h-full w-full object-cover"
          src=${video.thumbnail}
          alt="Shoes" />
          ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute text-xs right-2 bottom-2 bg-black p-1 rounded text-white">${getTimeString(video.others.posted_date)}</span>` }
          
      </figure>
      <div class="px-0 py-2 flex gap-2">
        <div>
        
        <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
        </div>
        <div>
        <h2 class="font-bold">${video.title}</h2>
       <div class="flex item-center gap-2">
        <p class="text-grey-400">${video.authors[0].profile_name}
        </p>
       

        ${video.authors[0].verified == true ? ` <img class="w-5" src="https://img.icons8.com/?size=60&id=lalayI2ulYNt&format=png"/>` : ""}
       </div>
        <p></p>
        </div>
      </div>`
    
      videoContainer.append(card)
    })
    

}



//create display-catagories

const displayCatagory =(categories)=> {
    const cataContainer=document.getElementById('catagory')
    // console.log(data);
    categories.forEach((item)=>{
        console.log(item);


        //create a button
        const buttonContainer=document.createElement('div')
        buttonContainer.innerHTML=` <button id="btn-${item.category_id}" onclick="loadCategoryVideo(${item.category_id})" class="btn catagory-btn">
            ${item.category}
        </button>`
       

        // button.classList="btn"
        // button.innerText=item.category
        // button.onclick=()=>{alert("hello world")}

        //add button to catagory container
        // 
        cataContainer.append(buttonContainer)

    })
    
}

loadCatagory()
videoCatagory()


