function init() {
    var costPerHour=prompt("Enter your name: " );
    var chargePerHour=parseFloat(costPerHour);
    var hours= prompt("Enter number of hours on the job: ");
    var numHours=Number(hours);
    var totalCost= calcServiceCost(chargePerHour, numHours);
    document.writeln("Charge for one hour of a plumber’s visit: $"+ costPerHour+". ");
    document.writeln("Number of hours on the job: "+ hours+" hours. ");
    document.writeln("Total cost service: $"+totalCost);
    }
    
    window.onload = init;


