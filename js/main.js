function weather(){
    navigator.geolocation.getCurrentPosition(function(res){
        fetch('https://geoapi.heartrails.com/api/json?method=searchByGeoLocation&x='+res.coords.longitude+'&y='+res.coords.latitude)
        .then((res)=>{
            return res.json();
        })
        .then((resj)=>{
            var pre=resj.response.location[0].prefecture;
            pre=pre.replace("都","");
            pre=pre.replace("道","");
            pre=pre.replace("府","");
            pre=pre.replace("県","");
            console.log(pre);
        })
    },function(res){
        document.getElementById('body').innerHTML+='取得できませんでした...';
    });
}