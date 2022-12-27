function weather(){
    navigator.geolocation.getCurrentPosition(function(res){
        console.log('lat:'+res.coords.latitude+',lon:'+res.coords.longitude);
        fetch('https://geoapi.heartrails.com/api/json?method=searchByGeoLocation&x='+res.coords.longitude+'&y='+res.coords.latitude)
        .then((res)=>{
            return res.json();
        })
        .then((resj)=>{
            console.log(resj.response.location[0].prefecture);
        })
    },function(res){
        document.getElementById('body').innerHTML+='取得できませんでした...';
    });
}