User.prototype.bind = function(view){
  view.nameEL.addEventListener('change',evt=>{
    this.name = evt.target.value;
  });
  view.ageEL.addEventListener('change',evt=>{
    this.age = evt.target.value;
  })

}

Object.defineProperty(User.prototype,'name',{
  set:function(name){
    view.nameEL.value = name;
  }
  get:function(){
  return view.nameEL.value;
}
})

Object.defineProperty(User.prototype,'age',{
  set:function(name){
    var ageOptions = Array.from(view.ageEL.options)
    .map(item=>item.innerHTML);
      if(ageOptions.indexOf(name)==='-1'){
        throw new Error('无效年龄格式');
      }
    view.ageEL.vlaue = name;
  }
  get:function(){
  return view.ageEL.value ;
}
})

var user = new User('lzf','90后');
user.bind(view);
