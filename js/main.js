function weather(){
    navigator.geolocation.getCurrentPosition(function(res){
        console.log('lat:'+res.coords.latitude+',lon'+res.coords.longitude);
    },function(res){
        document.getElementById('body').innerHTML+='取得できませんでした...';
    });
}