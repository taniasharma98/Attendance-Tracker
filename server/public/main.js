const studentsPhotos = document.getElementsByClassName("student-photo");
for(student of studentsPhotos){
    const img = `images/faces/${Math.floor(Math.random() * Math.floor(11))}.jpg`
    console.log(img)
    student.src = img;
}