function handleError(request, message, error) {
    var msg = "";

    msg += "Code: " + request.status + "\n";
    msg += "Text: " + request.statusText + "\n";
    if (request.responseJSON != null) {
        msg += "Message: " +
            request.responseJSON.Message + "\n";
    }

    alert(msg);
}



$(function () {
    $.ajax({
        url: "https://picsum.photos/v2/list?page=1&limit=20",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var str = "";
            for (var i = 0; i < data.length; i++) {
                console.log(data.length)
                str += `
         <div class="card" id="first-page">
         <div class="card-image">
         <img width="100" height="200" src=${data[i].download_url} />
         </div>
         <div class="card-info">
             <h3> ${data[i].id}</h3>
             <p>${data[i].author}</p>
         </div>
         </div>
         `;
            }
            $("#firstSetInfo").html(str);
        },
        error: handleError,
    });
});


var currentpage=1;
$('#prev').click(function(){
    if(currentpage > 1){ //limiting function of prev to 1
        $('#firstSetInfo').show()
        currentpage=currentpage -1;
        apiDetailsCall(currentpage);
    }
})

$('#next').click(function(){
    if(currentpage < 5){
        $('#firstSetInfo').show()
        currentpage=currentpage +1;
        apiDetailsCall(currentpage);
    }
})

$('#onClickButton1').click(function () {
    $('#firstSetInfo').show() //default method to display the elements.
    currentpage=1;
    apiDetailsCall(1);
})


$('#onClickButton2').click(function () {
    $('#firstSetInfo').show()
    currentpage=2;
    apiDetailsCall(2);
})


$('#onClickButton3').click(function () {
    $('#firstSetInfo').show()
    currentpage=3;
    apiDetailsCall(3);
})


$('#onClickButton4').click(function () {
    $('#firstSetInfo').show()
    currentpage=4;
    apiDetailsCall(4);
})


$('#onClickButton5').click(function () {
    $('#firstSetInfo').show()
    currentpage=5;
    apiDetailsCall(5);
})

$('#onClickButton1').click(function () {
    $('#firstSetInfo').show()
    apiDetailsCall(1);
})



const apiDetailsCall = async (pageNumber) => {
   
    $(function () {

        $.ajax({
            url: "https://picsum.photos/v2/list?page=" + pageNumber + "&limit=20",
            method: "GET",
            dataType: "json",
            success: function (data) {
                var str = "";
                for (var i = 0; i < data.length; i++) {
                    console.log(data.length)
                    str += `
             <div class="card" id="first-page">
             <div class="card-image">
             <img width="100" height="200" src=${data[i].download_url} />
             </div>
             <div class="card-info">
                 <h3> ${data[i].id}</h3>
                 <p>${data[i].author}</p>
             </div>
             </div>
             `;
                }

                $("#firstSetInfo").html(str);
            },
            error: handleError, //set alert message if the api call went wrong
        });
    });
}




