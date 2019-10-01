function search(){
document.getElementById("result").innerHTML="";
var searchValue=document.getElementById("textBox").value;

//alert(searchValue);

  if(searchValue==""){
    document.getElementById("result").innerHTML="";
    
    $("#result").append("There were no results matching the query.")
  }
  else{
 $.ajax({
           url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + searchValue,
          dataType: "jsonp",
          type: 'POST',
          headers: {
             'Api-User-Agent': 'Example/1.0'
           },
        success: getList
      });
  }
}

function getList(json){

  var list=json.query.search;
  
  if(list.length==0){
    document.getElementById("result").innerHTML="";
    
    $("#result").append("There were no results matching the query.")
  }
  else{
  for(var i=0;i<list.length;i++){
    
    
       $("#result").append('<div class="card" style="margin:10px"><div class="card-block"><h4 class="card-title">' + list[i].title + '</h4><p class="card-text">' + list[i].snippet + '</p><a target="_blank" href="https://en.wikipedia.org/wiki/' + list[i].title + '" class="btn btn-primary">View on Wikipedia</a></div></div>'

);
  } 
  }
  //console.log(titles);
  
}




$(document).ready(function(){});

$("#searchButton").click(function(){
  
  search();
  
});

  

$(function(){
  $('.searchBox').keypress(function(e){
    if(e.which == 13) {
      search();
      //alert('Enter pressed');
    }
  })
})
