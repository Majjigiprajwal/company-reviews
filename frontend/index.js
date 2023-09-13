const rating = document.getElementById('rating');
let selectedRating;

const getSelectedRating = (e)=>{
    if(e.target.classList.contains('star')){
        selectedRating = e.target.id;
    }
    highlightRatings();
    console.log(selectedRating);
}

const submitReview = async ()=>{
    const company = document.getElementById('name').value;
    const pros = document.getElementById('pros').value;
    const cons = document.getElementById('cons').value;
    const rating = selectedRating;

    const companyData ={
        companyName:company,
        pros:pros,
        cons:cons,
        ratings:rating
    }
    try{
        const response = await  axios.post("http://localhost:4000/company-review",companyData);
    }
    catch(error){
        console.log(error)
    }
}
 const highlightRatings = ()=>{
    const ratings = document.querySelectorAll('.star');
    ratings.forEach((rating)=>{
        if(rating.id<=selectedRating){
            rating.classList="active"
        }
    })
 }

 const getStarRating = (rating)=>{
    const starDiv = document.createElement('div');
     for(let i=0;i<rating;i++){
       starDiv.innerHTML +=`<span class="star active">&#9733;</span>`
     }
     console.log(starDiv);
     return starDiv;
 }


const getCompanyReview = async ()=>{
    const company = document.getElementById('company').value;
    const companyReview = document.getElementById('review');
    try{
       let response = await axios.get(`http://localhost:4000/company-reviews/${company}`)
       const name = document.createElement('p');
       name.id="reviewName"
       name.textContent=`Company : ${company}`
       const rating = document.createElement('p');
       rating.id="averageRating"
       companyReview.appendChild(name);
       companyReview.appendChild(rating);
       const totalReview = response.data.length;
       let totalRatings = 0;
       console.log(totalReview);
       if(response.data.length===0){
        companyReview.innerHTML = `<h1>No Revieew For This Company</h1>`
       }
       response.data.forEach((review)=>{
        const starRating = getStarRating(review.ratings);
        let reviews =`
        <div>
        <p style="font-size:25px;color:#05386b">Pros</p>
        <p>${review.pros}</p>
        <p style="font-size:25px;color:#05386b">Cons</p>
        <p>${review.cons}</p>
        <div class="rating">${starRating.innerHTML}</div>
        </div>
        <hr>
        `
        totalRatings=totalRatings + Number(review.ratings);
        companyReview.innerHTML += reviews;
       })
       let avgRating =(totalRatings/totalReview);
       document.getElementById('averageRating').textContent='Rating :'+avgRating.toFixed(1);

    }
    catch(error){
        companyReview.innerHTML = `<h1>No Revieew For This Company</h1>`
        console.log(error)
    }
}



rating.addEventListener('click',getSelectedRating)

document.getElementById('submit').addEventListener('click',submitReview)

document.getElementById('search').addEventListener('click',getCompanyReview)
