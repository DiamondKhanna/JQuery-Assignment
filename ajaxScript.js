var obj={};
var l=1;
$(document).ready(function()
{
 $(".abc").click(function()
 {
    var table=document.getElementById("myTable");
    for(var row_number=table.rows.length-1;row_number>0;row_number--)
    {
      table.deleteRow(row_number);
    }
    l=1;
   var a=$(".textClass").val();
       //-------------- this is an alt approach to get json data---------------

       // $.getJSON("http://www.omdbapi.com/?s="+a, function(result){
       //     $.each(result, function(i, field){
       //         // $(".body-Section").append(JSON.stringify(field) );
       //         if(i=="Search")
       //         {
       //             obj=JSON.stringify(field);
       //         }
       //     });

        //C.R.U.D Create Read Update Delete
       //----------------------***--------------------------------------------------
       $.ajax({
         type:'GET',
               url: 'http://www.omdbapi.com/?s='+a,      //'a' contains value contained in text box
               dataType:'json',
               success: function(jsonData)
               {
                  // console.log("Data returned is: ", jsonData);
                  // console.log("Data returned is: ", JSON.parse(JSON.stringify(jsonData)));
                    objColln = jsonData.Search;
                    $(objColln).each(function(i,val)
                    {
                      $.each(val,function(k,v)
                      {
                            //console.log(k.length);
                            if(l!=objColln.length)
                            {
                              var table = document.getElementById("myTable");
                              var row = table.insertRow(l);
                              var cell1 = row.insertCell(0);
                              var cell2 = row.insertCell(1);
                              var cell3 = row.insertCell(2);
                              var cell4 = row.insertCell(3);
                              var cell5 = row.insertCell(4);

                              cell1.innerHTML = objColln[l].Title;
                              cell2.innerHTML = objColln[l].Year;
                              cell3.innerHTML = objColln[l].imdbID;
                              cell4.innerHTML = objColln[l].Type;
                              cell5.innerHTML = "<img src="+objColln[l].Poster+">";
                              l=l+1;
                            }
                          });
                    });
                  },
                  error: function()
                  {
                   alert('Error in Loading');
                 }
               });

     });
});