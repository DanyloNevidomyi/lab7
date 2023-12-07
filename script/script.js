let headerDiv = document.createElement('div');
headerDiv.id = "header-div";

headerDiv.innerHTML = `
    <div id="question-div">
        <p>Запитайте щось y магічного чоловіка</p>
        <input type="text" placeholder = "Запишіть питання"> <br><br>
        <button id="btn">Дізнатись відповідь</button>
    </div>
    <div id="sphere-div">
        <div id="image-result-div">
            <div id="result-div"></div>
        </div>
    </div>
`;

let style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
body
{
    font-family: sans-serif;
    background-image: url('img/space.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    margin: 0; 
}

#header-div 
{
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    border: 0px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
}
#question-div 
{
    margin-bottom: 20px;
    font-size: 30px;
}
#btn 
{
    background-color: #0074d9;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 10px;
}
#image-result-div 
{
    background-image: url('img/f33e7cb6-9241-428c-ab1a-b413bd07fcc1-1673785337193.jpg');
    background-size: 100% 100%;
    height: 350px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; 
    background-position: center; 
}
#result-div 
{
    font-size: 50px;
    font-weight: bold;
    color: white; 
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; 
}
#sphere-div
{
    display: flex;
    align-items: center;
    justify-content: center;
}
input
{
    width: 400px;
    height: 30px;
    font-size: 25px;
    border-radius: 4px;
}

p
{
    color: white; 
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

@media screen and (max-width: 600px) 
{
    body 
    {
        font-size: 30px;
    }

    #header-div 
    {
        max-width: 90%;
    }

    #image-result-div 
    {
        width: 350px; 
        height: 350px;
    }

    #result-div 
    {
        font-size: 50px;
    }

    #btn
    {
        font-size: 20px;
        border-radius: 10px;
    }

    input
    {
        width: 335px;
        height: 25px;
    }

    #question-div
    {
        align-items: center;
        justify-content: center;
    }

}
`;

document.body.appendChild(headerDiv);
document.head.appendChild(style);

document.getElementById("btn").addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * 3);
    let randomRes = randomNum;
    if (randomNum == 1) {
        randomRes = "Так!";
    } else if (randomNum == 2) {
        randomRes = "Ні!";
    } else {
        randomRes = "Можливо...";
    }

    document.getElementById("result-div").innerHTML = randomRes;
});