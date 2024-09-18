document.getElementById("bim-form").addEventListener('submit',function(e){
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const hightfeet = parseInt( document.getElementById("hight-feet").value);
    const hightnch = parseInt( document.getElementById("hight-inch").value);
    const weight = parseFloat(document.getElementById("weight").value);



    if(gender&&age && hightfeet && hightnch && weight){
        const height = hightfeet*12+hightnch;
        const heightInMeters =height*0.0254;
        const bmi = weight/(heightInMeters*heightInMeters);
        const resultElement = document.getElementById("result");

        let catigory='';
        if(bmi<18.5){
            catigory='Underweight';
        }else{
            if(bmi<25){
                catigory='Normal';
            }
            else{
                if(bmi<30){
                    catigory='Overweight';
                }
                else{
                    catigory='Obese';
                }
            }
        }
        let resultMessage ='your BMI:' + bmi.toFixed(2)+'<br>';
        resultMessage += 'your catigory:' + catigory;
        resultElement.innerHTML = resultMessage;
        
    }

});

