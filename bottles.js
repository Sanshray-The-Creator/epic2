img2 = "";
status22 = "";
objects2 = [];

function setup()
{
    canvas = createCanvas(600, 380);
    canvas.center();
    oneshot2 = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status2").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Coco SSD Model is loaded!");
    status22 = true;
    oneshot2.detect(img2, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
      console.log(error);
    }
    else
    {
      console.log(results);
      objects2 = results;
    }
}

function preload()
{
    img2 = loadImage("bottles.jpg");
}

function draw()
{
    image(img2, 10, 10, 600, 380);
    if(status22 != "empty")
    {
       for(i = 0; i < objects2.length; i++)
       {
        document.getElementById("status2").innerHTML = "Status : Object Detected";
        fill("orange");
        percent = floor(objects2[i].confidence * 100);
        text(objects2[i].label + " " + percent + "%", objects2[i].x, objects2[i].y);
        noFill();
        stroke("blue");
        rect(objects2[i].x, objects2[i].y, objects2[i].width, objects2[i].height);
       }
    }
}