
var btn = document.getElementById("btn")



btn.addEventListener('click' , function(){
    
    var arr1 = ["“You only live once, but if you do it right, once is enough.”" , "“A friend is someone who knows all about you and still loves you.”" ,"“If you tell the truth, you don't have to remember anything.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”" , "“So many books, so little time.”" ,"“Be the change that you wish to see in the world.”"]
    var arr2 = ["― Mae West" ,"― Elbert Hubbard" , "― Mark Twain" ,"― Robert Frost" ,"― Frank Zappa" ,"― Mahatma Gandhi"]
   
    var num = Math.floor(Math.random() * arr1.length)

    document.getElementById("caption").innerHTML=arr1[num]
    document.getElementById("name").innerHTML=arr2[num]

})