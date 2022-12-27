function weather(){
    navigator.geolocation.getCurrentPosition(function(res){
        fetch('https://geoapi.heartrails.com/api/json?method=searchByGeoLocation&x='+res.coords.longitude+'&y='+res.coords.latitude)
        .then((res)=>{
            return res.json();
        })
        .then((resj)=>{
            var pre=resj.response.location[0].prefecture;

            //replace
            pre=pre.replace("都","");
            pre=pre.replace("道","");
            pre=pre.replace("府","");
            pre=pre.replace("県","");

            console.log(pre);

            //converting
            var code=['016010']
            for (var i=0;i<45;i++){
                if(i+2<10){
                    code[i+1]="0"+((i+2).toString())+"0010";
                }else{
                    code[i+1]=((i+2).toString())+"0010"
                }
            }
            code[47]="471010";
            var prefectures=[
                '北海',
                '青森',
                '岩手',
                '宮城',
                '秋田',
                '山形',
                '福島',
                '茨城',
                '栃木',
                '群馬',
                '埼玉',
                '千葉',
                '東京',
                '神奈川',
                '新潟',
                '富山',
                '石川',
                '福井',
                '山梨',
                '長野',
                '岐阜',
                '静岡',
                '愛知',
                '三重',
                '滋賀',
                '京都',
                '大阪',
                '兵庫',
                '奈良',
                '和歌山',
                '鳥取',
                '島根',
                '岡山',
                '広島',
                '山口',
                '徳島',
                '香川',
                '愛媛',
                '高知',
                '福岡',
                '佐賀',
                '長崎',
                '熊本',
                '大分',
                '宮崎',
                '鹿児島',
                '沖縄',
            ];

            var answer=code[prefectures.indexOf(pre)];

            //weather_get
            fetch('https://weather.tsukumijima.net/api/forecast/city/'+answer)
            .then((res)=>{
                return res.json();
            })
            .then((resj)=>{
                console.log(resj);
                document.getElementById('title').innerHTML=resj.title;
                document.getElementById('weaImg').innerHTML="<img src='"+resj.forecasts[0].image.url+"' style='height:"+((resj.forecasts[0].image.height / 2).toString())+";width:"+((resj.forecasts[0].image.width / 2).toString())+";' title='"+resj.forecasts[0].image.title+"'></img>";
                document.getElementById('body').innerHTML+="<p>"+resj.forecasts[0].detail.weather.replace("　"," ")+"</p>";
                document.getElementById("body").innerHTML+="<p>"+resj.publicTime+"<br>"+resj.publishingOffice+"</p>";
                document.getElementById("body").innerHTML+="<p><a href='"+resj.link+"'>もっと詳しく</a></p>";
                document.getElementById("body").innerHTML+="<p><a href='"+resj.copyright.link+"'>"+resj.copyright.title+"</a></p>";
            })
        })
    },function(res){
        document.getElementById('body').innerHTML+='取得できませんでした...';
    });
}