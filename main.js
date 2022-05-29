var Dog = 0;
var Cat = 0;
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EbJ8F9V-u/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error ,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        document.getElementById("result_label").innerHTML=results[0].label;
        
        
        if(results[0].label == "Dog")
        {
            document.getElementById("abc").src="dog.gif";
        }
        else if(results[0].label == "Cat")
        {
            document.getElementById("abc").src="cat.gif";
        }

        else
        {
            document.getElementById("abc").src="listening.gif";
        }
    }
}

