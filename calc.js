    const calculator = document.querySelector('.calculator');           //listen for all key presses
    const keys = calculator.querySelector('.calculator__keys');         //determine the type of key that is pressed
    const display = document.querySelector('.calculator__display');     //the display of calculator

    keys.addEventListener('click', e => {                               //event delegation (element.addEventListener(event, function, useCapture);
      if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action ;
        const keyContent = key.textContent ;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;     //to check the previous key is an operator 

        
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent;                       //displaying the numbers when the when display screen says 0 or an operator is pressed 
              } else{
                display.textContent = displayedNum + keyContent;        //displaying whatever you are pressing on num keys
            } 
            calculator.dataset.previousKeyType = 'number';
        }



        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {                          //checking the display for the presence of decimal if no                     
            display.textContent = displayedNum + '.';                   //displaying number with decimal
            }else if (previousKeyType === 'operator' || previousKeyType === 'calculate'){
                display.textContent = '0';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }
        

        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            
            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {                 //checking for first value and operature ,no need to check for second value ,it will exist obv.
                
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue ;
                calculator.dataset.firstValue = calcValue;                                 // Update calculated value as firstValue
                // display.textContent = calculate(firstValue, operator, secondValue);
            } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum;
              }


            key.classList.add('is-depressed');                                            //the +-*/ are highlighted when their button is pressed 
            calculator.dataset.previousKeyType='operator';                                //identifying the previous key is an operator key.
            // calculator.dataset.firstValue = displayedNum ;                             //storing the first number before wiping it from display screen
            calculator.dataset.operator = action         ;
        
        }
    
        
    
        if (action === 'clear') {
              if (key.textContent === 'AC') {
                  calculator.dataset.firstValue ='';
                  calculator.dataset.modValue ='';
                  calculator.dataset.operator ='';
                  calculator.dataset.previousKeyType ='';
            } else {
            
            key.textContent = 'AC'  ;
            }
            display.textContent =0;
            calculator.dataset.previousKeyType = 'clear';
        }

        if (action !== 'clear'){
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
          }
        
    
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue= calculator.dataset.modValue;
                }
            display.textContent = calculate(firstValue, operator, secondValue);
            }
            
                calculator.dataset.modValue = secondValue;                  // Set modValue attribute
                calculator.dataset.previousKeyType = 'calculate';
        }
            

            // To release the pressed state,removing .is-depressed class from all keys  
            Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
           }
             })

        const calculate = (n1, operator, n2) => {        // Perform calculation and return calculated value
            
            let result = '';
    
        if (operator === 'add') {
            
        result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2);
        
        }
        return result;
            }
    

    
   
    