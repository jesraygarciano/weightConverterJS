document.getElementById('lbsInput').addEventListener('input', function(e){
    // console.log(123);
    let pounds = e.target.value;
    // console.log(pounds);

    document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('kgOutput').innerHTML = pounds/0.0022046;
    document.getElementById('ozOutput').innerHTML = pounds/0.0022046;

})