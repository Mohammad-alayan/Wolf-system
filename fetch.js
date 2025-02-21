
let des=document.getElementById("des")
let namess=document.getElementById("mname")
let muscles=document.getElementById("muscle")
let botn=document.getElementById("botttn")
let search=document.getElementById("search")


let workout={

key:apikey="&X-Api-Key=xoOJkCOdssHRpRsajrYnMA==qDVGI17QZl0NtvS9",
   api:function (muscle){fetch(
"https://api.api-ninjas.com/v1/exercises?muscle="+muscle+this.key)
.then((res)=>res.json())
    .then((data)=> this.display(data))
   },
   display:function(data){
    const {name}=data[0];
    const {muscle}=data[0]
    
const {instructions}=data[0]
console.log(name,muscle, instructions)
namess.innerHTML=name
des.innerHTML=instructions
muscles.innerHTML=muscle
    },
    


    
        
    }

    
    botn.addEventListener("click",function(e){
        e.preventDefault()
        workout.api(search.value)
         }),
         search.ad("keyup",function(event){
            if(event.key =="Enter"){
                workout.api(search.value)
            }
         })
                   
