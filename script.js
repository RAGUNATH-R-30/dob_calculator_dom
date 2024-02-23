function click(){
    var input =document.getElementById("dob").value
    var input_date = new Date(input)
    var current_date = new Date();
    console.log(input_date)

    var milliseconds = parseInt(current_date.getTime()-input_date.getTime())
    console.log("milli"+milliseconds)

    var seconds = Math.floor(milliseconds/1000)
    console.log("sec"+seconds)

    var minutes = Math.floor(seconds/60)
    console.log("min"+minutes)

    var hours = Math.floor(minutes/60)
    console.log("hrs"+hours)

    var days = Math.floor(hours/24)
    console.log("days"+days)

    var years = current_date.getFullYear()-input_date.getFullYear()
    console.log("years"+years)

    var months =(years*12)+current_date.getMonth()-input_date.getMonth()
    console.log("months"+months)

    var div = document.createElement("div")
    var content_ele = document.createElement("span")
    content_ele.innerHTML="You Lived for:"
    var millisecond_ele = document.createElement("p")
    millisecond_ele.innerHTML=`MilliSeconds: ${milliseconds}`
    var seconds_ele = document.createElement("p")
    seconds_ele.innerHTML = `Seconds:${seconds}`
    var minutes_ele = document.createElement("p")
    minutes_ele.innerHTML = `Minutes:${minutes}`
    var hours_ele = document.createElement("p")
    hours_ele.innerHTML = `Hours:${hours}`
    var days_ele = document.createElement("p")
    days_ele.innerHTML = `Days:${days}`
    var months_ele = document.createElement("p")
    months_ele.innerHTML = `Months:${months}`
    var years_ele =document.createElement("p")
    years_ele.innerHTML = `Years:${years}`
    
    div.append(content_ele,years_ele,months_ele,days_ele,hours_ele,minutes_ele,seconds_ele,millisecond_ele)
    document.body.append(div)
    }


var date =document.createElement("input")
date.setAttribute("type","date")
date.id = "dob"

var button = document.createElement("button")
button.setAttribute("type","button")
button.className ="btn btn-primary"
button.innerHTML = "Click"
button.addEventListener("click",click)


document.body.append(date,button)