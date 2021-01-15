let toss = document.getElementById('button');

var faces = ["&#49;","&#9818;"]

toss.addEventListener('click',function()

{
  var randomNumber = Math.floor(Math.random() * 2) +1;

  if (randomNumber == 1) { document.getElementById("face").innerHTML = faces[0];
  document.getElementById("headsTails").innerHTML = "Tails";


} else { document.getElementById("face").innerHTML = faces[1];
    document.getElementById("headsTails").innerHTML = "Heads";
  }
}
)

var x = 0;
var array = Array();

toss.addEventListener('click',function add_element_to_array()
{
 array[x] = document.getElementById("headsTails").innerHTML;
 x++;
}
)



toss.addEventListener('click',function displayArray()
{
   var e = "";
   for (var y=0; y<array.length; y++)
   {
     e += array[y];
     const arr1=[array[y]];
     var mf = 0;
     var m = 0;
     var item;
     for (var i=0; i<arr1.length; i++)
     {
             for (var j=i; j<arr1.length; j++)
             {
                     if (arr1[i] == arr1[j])
                      m++;
                     if (mf<m)
                     {
                       mf=m;
                       item = arr1[i];
                     }
             }
             m=9;

     }
   }
   document.getElementById("td"+y).innerHTML = array[array.length-1];
   document.getElementById("final").innerHTML = (item+" ( " +mf +" times ) ");
}
)

var clickCounter = 0;
toss.addEventListener('click', function() {
    clickCounter++;
    if (clickCounter == 9) {
      document.getElementById('button').disabled = true;
      return;
    }
});
