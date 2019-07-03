// If some clicks Add New Event
var c = -1
$('.addnewevent').on('click',function(){
  c = c + 1
  var large = '<div class="columnxd"><div class="card" style="width: 18rem;"><img src="#" class="card-img-top profile-img-tag" alt=""><div class="card-body"><h4 class="card-title cardtitle event-name">Add Event</h4><p class="card-text cardtext event-type">Add Event Type</p></div><ul class="list-group list-group-flush"><li class="list-group-item size listdescription">Add Model Description</li></ul><div class="alert alert-info rulebook" role="alert">RuleBookURL</div><div class="card-body printhere"><h6 class="edit">Categories:</h6><div class="categ"></div><h6 class="edit">Days:</h6><div class="dayss"></div></div><div class="together"> <button type="button" class="btn btn-primary boxy" data-toggle="modal" data-target="#exampleModalScrollable">Edit</button><div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalScrollableTitle">List Event</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><form><div class="form-group"> <label for="exampleInputPassword1">Event Name</label> <input type="text" class="form-control eventname" id="exampleInputPassword1" placeholder="Event Name"></div><div class="form-group"> <label for="exampleInputEmail1">Event Type</label> <input type="text" class="form-control eventtype" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Type"></div><div class="form-group shadow-textarea"> <label for="exampleFormControlTextarea6">Event Description</label><textarea class="form-control z-depth-1 textarea" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..."></textarea></div><div class="form-group"> <label for="exampleInputPassword1">Rulebook URL</label> <input type="text" class="form-control rulebookurl" id="exampleInputPassword1" placeholder="Enter Rulebook URL"></div><div class="form-group"> <label for="exampleInputPassword1">Categories:</label> <br> <input type="text" class="form-control new-categories" id="exampleInputPassword1" placeholder="New Categories here"> <button type="button" class="btn btn-dark btn-sm addcategories">Add Categories</button><table class="category"></table></div><div class="form-group"> <label for="exampleInputPassword1">Days:</label> <br><ul><li class="set_margin">Day</li> <input class="oneday" type="text" class="form-control new-categories" id="exampleInputPassword1" placeholder="Ender Day"><li class="set_margin">Session</li> <input class="onesession" type="text" class="form-control new-categories" id="exampleInputPassword1" placeholder="Enter about the session"><li class="set_margin">Time</li> <input class="onetime" type="text" class="form-control new-categories" id="exampleInputPassword1" placeholder="Time?"><li class="set_margin">Venue</li> <input class="onevenue" type="text" class="form-control new-categories" id="exampleInputPassword1" placeholder="Venue"></ul> <button type="button" class="btn btn-dark btn-sm addinfo">Add Info</button><table class="info"></table></div></form></div><div class="modal-footer"> <input type="file" onchange="readURL(this);"> <button type="button" class="btn btn-primary saveimage" data-dismiss="modal">Select Image</button> <button type="button" class="btn btn-primary saveevent" data-dismiss="modal">Save Event</button></div></div></div></div> <button type="button" class="btn btn-primary boxy delete" data-target="#exampleModalScrollable">Delete</button></div></div></div>'
  $('.row').append(large);
})





// If someone clicks on Save Event
$('.row').on('click','.saveevent',function(){
  var eventname = $(this).closest('.row').find('.eventname').eq(0).val();
  var eventtype = $(this).closest('.row').find('.eventtype').eq(0).val();
  var rulebookurl = $(this).closest('.row').find('.rulebookurl').eq(0).val();
  var categorieslist = $(this).closest('.row').find('.cat').eq(0).text();
  var dayslist = $(this).closest('.row').find('.day').eq(0).text();
  var eventdescription = $(this).closest('.row').find('.textarea').eq(0).val();
  $('.info').remove();
  $('.category').remove();
  // Here it uploads to Eventname
  $(this).closest('.row').find('.event-name').eq(c).text(eventname);

  // Here it uploads to Eventtype
  $(this).closest('.row').find('.event-type').eq(c).text(eventtype);

  $(this).closest('.row').find('.rulebook').eq(c).html("<p>RuleBookURL : "+rulebookurl+"</p>");


  $(this).closest('.row').find('.categ').eq(c).css('text-align','center');
  $(this).closest('.row').find('.dayss').eq(c).css('text-align','center');
  $(this).closest('.row').find('.listdescription').eq(c).text(eventdescription);

  $(this).closest('.columnxd').find('.eventname').val('');
  $(this).closest('.columnxd').find('.eventtype').val('');
  $(this).closest('.columnxd').find('.rulebookurl').val('');
  $(this).closest('.columnxd').find('.cat').text('');
  $(this).closest('.columnxd').find('.textarea').val('');
  $(this).closest('.columnxd').find('.day').text('');
})


// if someone clicks on delete button
$('.row').on('click', '.delete', function(){
  $(this).closest('.row').find('.columnxd').eq(0).remove();
  c=c-1
})


//  if someone clicks on Add Info
$('.row').on('click','.addinfo' ,function(){
  var day = $(this).closest('div').find('.oneday').val();
  var session = $(this).closest('div').find('.onesession').val();
  var time = $(this).closest('div').find('.onetime').val();
  var venue = $(this).closest('div').find('.onevenue').val();
  if( day!='' && session!='' && time!='' &venue!=''){
    $(this).closest('.row').find('.info').eq(c).append('<tr><td><button class="btn btn-secondary btn-sm day">'+day+'      '+session+'     '+time+'     '+venue+'</button><td><button type="button" class="btn btn-primary btn-sm">Remove</button></tr>')
    $(this).closest('.row').find('.dayss').eq(c).append("<p> Day:  " + day + "       Session:  " + session + "       Time:  " + time + "       Venue:  " + venue + "</p>");
  }
  $('.oneday').val('');
  $('.onesession').val('');
  $('.onetime').val('');
  $('.onevenue').val('');
})

// if someone clicks on add categories
$('.row').on('click','.addcategories' ,function(){
  var category = $(this).closest('div').find('.new-categories').val();
  if (category != ''){
      $(this).closest('.row').find('.categ').eq(c).append('<p>'+category+'</p>');
      $(this).closest('.row').find('.category').eq(c).append('<tr><td><button class="btn btn-secondary btn-sm cat">'+category+' </button></td></tr>')
  }
  $('.new-categories').val('');
})


// Adding Picture
function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {

                  $('.row').on('click','.saveimage' ,function(){
                    $(this).closest('.row').find('.profile-img-tag').eq(c).attr('src', e.target.result);
                  })

                }
                reader.readAsDataURL(input.files[0]);
            }
        }
