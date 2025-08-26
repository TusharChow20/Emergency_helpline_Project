function forCall(id, pera, num){
    event.preventDefault()
        const coinCount = parseInt(document.getElementById('coin-count').innerText)
        if (coinCount<20){
            return alert('You do not have coins. Need Minimum 20 Coins to Place a call. Thank YOu.')
        }
        document.getElementById('coin-count').innerText = coinCount-20;
        const pOne = document.getElementById(pera).innerText
        const number = document.getElementById(num).innerText
        const strForAlret = "Calling " + pOne + " service " + number
        let now = new Date();
        const newDiv = `
        <div class="bg-gray-100 rounded-2xl p-3 flex justify-between items-center mt-2">
            <div> 
                <h1> ${pOne} </h1>
                <p>${number}</p>
            </div>
            <div>
                <p>${now.toLocaleTimeString()} </p>
            </div>
        </div>`
        
        document.getElementById('container-new-div').innerHTML+=newDiv
        alert(strForAlret)
}

function forHeart(id){
    event.preventDefault()
    const heartCount = parseInt(document.getElementById('heart-count').innerText)
    document.getElementById('heart-count').innerText = heartCount+1;
}

function forCopy(id){

    event.preventDefault()
    const copyNumber = document.getElementById(id).innerText
    const heartCount = parseInt(document.getElementById('btn-copy').innerText)
    document.getElementById('btn-copy').innerText = heartCount+1;
    const finalCopy = "Copied Number : " + copyNumber
    navigator.clipboard.writeText(copyNumber);

    alert(finalCopy)
}
// click on heart increase 1 
document.getElementById('heart-icon-1').addEventListener('click',function(event){
    forHeart('heart-icon-1')
})
document.getElementById('heart-icon-2').addEventListener('click',function(event){
    forHeart('heart-icon-2')
})

document.getElementById('heart-icon-3').addEventListener('click',function(event){
    forHeart('heart-icon-3')
})
document.getElementById('heart-icon-4').addEventListener('click',function(event){
    forHeart('heart-icon-4')
})
document.getElementById('heart-icon-5').addEventListener('click',function(event){
    forHeart('heart-icon-5')
})
document.getElementById('heart-icon-6').addEventListener('click',function(event){
    forHeart('heart-icon-6')
})
document.getElementById('heart-icon-7').addEventListener('click',function(event){
    forHeart('heart-icon-7')
})
document.getElementById('heart-icon-8').addEventListener('click',function(event){
    forHeart('heart-icon-8')
})
document.getElementById('heart-icon-9').addEventListener('click',function(event){
    forHeart('heart-icon-9')
})

//call button
document.getElementById('btn-call-1').addEventListener('click',function(event){
        forCall('btn-call-1','emergency-one', 'emergency-num')
    })
document.getElementById('btn-call-2').addEventListener('click',function(event){
        forCall('btn-call-2','police-1','pol-num')
    })
document.getElementById('btn-call-3').addEventListener('click',function(event){
    forCall('btn-call-3','fire-1','fire-num')
})
document.getElementById('btn-call-4').addEventListener('click',function(event){
    forCall('btn-call-4','ambulance-1','ambulance-num')
})
document.getElementById('btn-call-5').addEventListener('click',function(event){
    forCall('btn-call-5','child-1','child-num')
})
document.getElementById('btn-call-6').addEventListener('click',function(event){
    forCall('btn-call-6','corruption-1','corruption-num')
})
document.getElementById('btn-call-7').addEventListener('click',function(event){
    forCall('btn-call-7','electricity-1','electricity-num')
})
document.getElementById('btn-call-8').addEventListener('click',function(event){
    forCall('btn-call-8','ngo-1','ngo-num')
})
document.getElementById('btn-call-9').addEventListener('click',function(event){
    forCall('btn-call-9','travel-1','travel-num')
})



//copy button

document.getElementById('copy-btn-1').addEventListener('click',function(event){
    forCopy('emergency-num')
})
document.getElementById('copy-btn-2').addEventListener('click',function(event){
    forCopy('pol-num')
})
document.getElementById('copy-btn-3').addEventListener('click',function(event){
    forCopy('fire-num')
})
document.getElementById('copy-btn-4').addEventListener('click',function(event){
    forCopy('ambulance-num')
})
document.getElementById('copy-btn-5').addEventListener('click',function(event){
    forCopy('child-num')
})
document.getElementById('copy-btn-6').addEventListener('click',function(event){
    forCopy('corruption-num')
})
document.getElementById('copy-btn-7').addEventListener('click',function(event){
    forCopy('electricity-num')
})
document.getElementById('copy-btn-8').addEventListener('click',function(event){
    forCopy('ngo-num')
})
document.getElementById('copy-btn-9').addEventListener('click',function(event){
    forCopy('travel-num')
})






    //clear call history
document.getElementById('btn-clear').addEventListener('click',function(event){
        event.preventDefault()
        // console.log('done')
        document.getElementById('container-new-div').innerHTML=''
})
