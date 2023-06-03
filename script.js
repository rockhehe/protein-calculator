const calculateProteinIntake = () => {
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const activityLevel = document.getElementById("activity-level").value;
    let proteinIntake = weight * activityLevel 
    if (age >= 40 && age < 60) {
        proteinIntake -= 10;
      } else if (age >= 60 && age <= 80) {
        proteinIntake -= 20;
      }
    
    document.getElementById("result").textContent = proteinIntake.toFixed(1);
  };
  
  document.getElementById("calculate-btn").addEventListener("click", calculateProteinIntake);
  