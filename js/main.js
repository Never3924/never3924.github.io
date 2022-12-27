function weather(){
    navigator.geolocation.getCurrentPosition(function(res){
        console.log('lat:'+res.coords.latitude+',lon:'+res.coords.longitude);
        fetch('http://geoapi.heartrails.com/api/json?method=searchByGeoLocation&x='+res.coords.longitude+'&y='+res.coords.latitude)
        .then((res)=>{
            return res.json();
        })
        .then((resj)=>{
            console.log(resj);
        })
    },function(res){
        document.getElementById('body').innerHTML+='取得できませんでした...';
    });
}