var obj={};
var objj;
var l=1;
$(document).ready(function()
{
   $(".abc").click(function()
   {
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


       //----------------------***--------------------------------------------------
       $.ajax({
               type:'GET',
               url: 'http://www.omdbapi.com/?s='+a,    
               dataType:'json',
               success: function(jsonData)
                {
                    obj=JSON.stringify(jsonData);
                    //console.log(obj);
                    var json=$.parseJSON(obj);
                    json=json.Search;
                    $(json).each(function(i,val)
                    {
                        $.each(val,function(k,v)
                        {
                            //console.log(k.length);
                            if(l!=json.length)
                            {
                                var table = document.getElementById("myTable");
                                var row = table.insertRow(l);
                                var cell1 = row.insertCell(0);
                                var cell2 = row.insertCell(1);
                                var cell3 = row.insertCell(2);
                                var cell4 = row.insertCell(3);
                                var cell5 = row.insertCell(4);

                                cell1.innerHTML = json[l].Title;
                                cell2.innerHTML = json[l].Year;
                                cell3.innerHTML = json[l].imdbID;
                                cell4.innerHTML = json[l].Type;
                                cell5.innerHTML = "<img src="+json[l].Poster+">";
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