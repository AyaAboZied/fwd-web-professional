/* Global Variables */
const url="http://localhost:8000/";
const apiKey="&appid=1866c3cbd7a91a3282f1b47fc4483c97&units=imperial";

const zipNew=document.getElementById('zip');
const feelEl=document.getElementById('feelings');
const dateEl=document.getElementById('date');
const tempEl=document.getElementById('temp');
const contentEl=document.getElementById('content');

const catchError =(error)=> console.error ('Some Error ', error);

//event listener to add function
document.getElementById('generate').addEventListener('click',onGenerate);

function onGenerate(){
 let data ={
     zipCode:zipNew.value,
    content:feelEl.value,
    date:new Date()
 };

 //Post Data To Api to Get zipCode info
 getZipInformation(data.zipCode).then(zipInfo =>{
    //Return And show Alert if city Not found
    if(zipInfo.cod !=200)
        return alert(zipInfo.message);
    //Post data to server to save and display
    data.temp=zipInfo.list[0].main.temp;
    postDataToServer(data);
 }).catch(catchError);

};

//Get ZipCode info from Api
async function getZipInformation(zipCode){
    return await
    (await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}${apiKey}`)).json()
}
//Post Data to server
async function postDataToServer(data){
    let res =await fetch(`${url}postData`,{
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify(data),
    });
    try{
        if(!res.ok){
            alert('Process Not Success');
            return;
        }
        res.json().then(data =>{
            if(res.ok)
                updateUi(); //Update Ui Now
            else
                alert('Process Not Success');
        }).catch(catchError);
    }
    catch (e){
        catchError(e);
    }
}
// Create a new date instance dynamically with JS
async function updateUi(){
    let res =await fetch(`${url}getAll`);
    console.log('iam here');
    try{
        res.json().then(data =>{
            dateEl.innerHTML=`Date Is : ${data.date}`;
            tempEl.innerHTML=`Temprature Is : ${data.temp}`;
            contentEl.innerHTML=`My Feelings Is : ${data.content}`;
        }).catch(catchError);
    }
    catch (e){
        catchError(e);
    }
}