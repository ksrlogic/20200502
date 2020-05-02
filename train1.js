function Course(title, instructor, published, views){
    this.title = title;
    this.instructor = instructor;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
        return ++this.views
    };
}

var courses = [
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
    new Course(0,1,true,1),
]
for(var i=0; i<courses.length; i++){
    if (i % 2 == 0){
        courses[i].title += 1
    }else{
        continue
    }


}
for(var i=0; i<courses.length; i++){
console.log(courses[i])}