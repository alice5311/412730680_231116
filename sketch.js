var sound1
function preload(){
  sound1 = loadSound("alex-productions-chop-chops.mp3")  //把音樂檔載入到sound1程式碼中

  }

  function setup() {
    createCanvas(windowWidth,windowHeight);
    background("#f0ebd8");
    analyzer = new p5.Amplitude();
    analyzer.setInput(sound1)
  }
  
  var w=100 //var宣告
  var s_w=50
  var fc

  function draw() {
    background("#f0ebd8");
    noFill()
    if(sound1.isPlaying())
    { //音樂有播放
       fc = map(analyzer.getLevel(),0,1,0,100)

    }
    else
    { //音樂沒播放
       fc = map(mouseX,0,width,0,100)
    }


    for(var y=50;y<=height+50;y=y+w ){ //for,產生一個迴圈，y的值從50開始，每次增加w，一直到y<=height=50這條件不成立之前，不斷做{}中的內容
    for(var x=50;x<=width+50;x=x+w)
    {
  
    stroke("#2364aa")
    rectMode(CENTER) //設方框中心點為其座標點
    rect(x,y,w+fc)
  
    stroke("#73bfb8")
    ellipse(x,y,w+fc)
  
    stroke("#fec601")
    ellipse(x,y,s_w+fc)
  }
  }
  }
  
  function mousePressed(){
    if(sound1.isPlaying()){
      sound1.stop(); //當音樂播放時按下滑鼠，音樂暫停
    }else{
      sound1.play();
    }
  }