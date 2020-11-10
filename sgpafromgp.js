
function outPutF(){
	
	var credit1 = parseInt(document.getElementById('credit1').value);
	var credit2 = parseInt(document.getElementById('credit2').value);
	var credit3 = parseInt(document.getElementById('credit3').value);
	var credit4 = parseInt(document.getElementById('credit4').value);
	var credit5 = parseInt(document.getElementById('credit5').value);
	var credit6 = parseInt(document.getElementById('credit6').value);
	var credit7 = parseInt(document.getElementById('credit7').value);
	var credit8 = parseInt(document.getElementById('credit8').value);
	 
	var first = parseInt(document.getElementById('first').value);
	var second = parseInt(document.getElementById('second').value);
	var third = parseInt(document.getElementById('third').value);
	var four = parseInt(document.getElementById('four').value);
	var five =parseInt( document.getElementById('five').value);
	var six = parseInt(document.getElementById('six').value);
	var seven =parseInt( document.getElementById('seven').value);
	var eight = parseInt(document.getElementById('eight').value);
	
	
	
	var totalCredits = parseInt(0)
    var totalGPA = parseInt(0)
    if (credit1!==0 && !isNaN(credit1)){
        if (first!==0 && !isNaN(first)){
            eval(totalCredits += credit1)
            totalGPA += first*credit1
        }    
    }
    if (credit2!==0 && !isNaN(credit2)){
        if (second!==0 && !isNaN(second)){
            totalCredits += credit2
            totalGPA += second*credit2 
        }
    }
    if (credit3!==0 && !isNaN(credit3)){
        if (third!==0 && !isNaN(third)){
            totalCredits += credit3
            totalGPA += third*credit3
          
        }    
    }
    if (credit4!==0 && !isNaN(credit4)){
        if (four!==0 && !isNaN(four)){
            totalCredits += credit4
            totalGPA += four*credit4
            
        }    
    }
    if (credit5!==0 && !isNaN(credit5)){
        if (five!==0 && !isNaN(five)){
            totalCredits += credit5
            totalGPA += five*credit5
        }    
    }
    if (credit6!==0 && !isNaN(credit6)){
        if (six!==0 && !isNaN(six)){
            totalCredits += credit6
            totalGPA += six*credit6
        }    
    }
    if (credit7!==0 && !isNaN(credit7)){
        if (seven!==0 && !isNaN(seven)){
            totalCredits += credit7
            totalGPA += seven*credit7
        }    
    }
    if (credit8!==0 && !isNaN(credit8)){
        if (eight!==0 && !isNaN(eight)){
            totalCredits += credit8
            totalGPA += eight*credit8
        }    
    }

    var SGPA = totalGPA/totalCredits
    SGPA = SGPA * 100
    SGPA = Math.floor(SGPA)
    SGPA = SGPA/100
  

	// Finally output the Calculation
	document.getElementById("result").value = SGPA
}
