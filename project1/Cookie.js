 // Setting up the cookie for persistent storage read() , write() , erase().

 function writeCookie(name , value , days){
    var expires = "";
    // specifying the number of days cookie persists.
    if(days) {   
    var date = new Date();
    date.setTime(date.getTime() + (days *24 * 60 * 60 * 1000));
    expires = "; expires =" + date.toGMTString();
    }
    // Set the Cookie to name , value , days
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie() {
   //Find the specified cookie and return its value
   var SearchName = name + "=";
   var cookies = document.cookie.split(';');
   for(var i=0; i < cookies.length; i++)
   {
       var c = cookies[i];
       while (c.charAt(0) == '') // Returns the fist character of the string
       c = c.substring(1 , c.length);
       if(c.indexOf(SearchName) == 0) // Doubt in this
         return c.substring(SearchName.length , c.length);
   }
   return null;

} 
function eraseCookie(name)
{
   writeCookie(name , "" , -1);
}