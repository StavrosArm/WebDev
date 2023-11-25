let currentStep = 1;


function nextStep(step) {

    const prevStep = currentStep;
    currentStep = step;
    
    
        document.getElementById(`step${prevStep}`).style.display = 'none';
        document.getElementById(`step${currentStep}`).style.display = 'block';
    
     
}

function prevStep(step) {
    const prevStep = currentStep;
    currentStep = step;

    document.getElementById(`step${prevStep}`).style.display = 'none';
    document.getElementById(`step${currentStep}`).style.display = 'block'


}


