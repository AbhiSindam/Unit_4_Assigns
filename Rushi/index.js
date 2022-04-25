function showData(e){
    e.preventDefault()


    let myForm = document.getElementById("myForm")

    let fName = myForm.fName.value;
    let lName = myForm.lName.value;

    // console.log(fName, lName)
    
    let parent = document.getElementById('viewData')

    let h1 = document.createElement("h1")
    let h2 = document.createElement("h2")

    h1.append(fName)
    h2.append(lName)
    parent.append(h1, h2)


}
