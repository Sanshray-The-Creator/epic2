img3 = "";
status33 = "";
objects3 = [];

function setup()
{
    canvas = createCanvas(600, 380);
    canvas.center();
    oneshot3 = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status3").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Coco SSD Model is loaded!");
    status33 = true;
    oneshot3.detect(img3, gotResults);
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
      objects3 = results;
    }
}

function preload()
{
    img3 = loadImage("desksupreme.jpg");
}

function draw()
{
    image(img3, 10, 10, 600, 380);
    if(status33 != "empty")
    {
       for(i = 0; i < objects3.length; i++)
       {
        document.getElementById("status3").innerHTML = "Status : Object Detected";
        fill("orange");
        percent = floor(objects3[i].confidence * 100);
        text(objects3[i].label + " " + percent + "%", objects3[i].x, objects3[i].y);
        noFill();
        stroke("blue");
        rect(objects3[i].x, objects3[i].y, objects3[i].width, objects3[i].height);
       }
    }
}