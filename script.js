
        //object to store scores
        let score =  JSON.parse(localStorage.getItem('score'));

        if(!score)
        {
            score ={ 
            wins: 0,
            losses: 0,
            tie: 0
            };
        }

       
        //Use.eventListener in scrpt.js isntead of onclick in html. 

        document.querySelector('.js-press-rock').addEventListener('click', () =>{yourMove('Rock')});
        document.querySelector('.js-press-paper').addEventListener('click', () => {yourMove('Paper')});
        document.querySelector('.js-press-scissor').addEventListener('click', () => {yourMove('Scissors')});

        document.querySelector('.js-cost').addEventListener('keydown', (event) => {  
            if(event.key === 'Enter'){
            calculateTotal();
            }});
        
        document.querySelector('.js-calculate').addEventListener('click', () => {calculateTotal()});
        document.querySelector('.js-reset').addEventListener('click', () => {
            score.wins = 0;
            score.losses = 0;
            score.tie = 0;
            localStorage.removeItem('score');
            updateScoreElement();
        });

        
        function calculateTotal(){
            const inputElement = document.querySelector('.js-cost');
            let cost = Number(inputElement.value);

            if(cost < 50){
                cost+= 10;
            }
            document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
        }

        updateScoreElement();
        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.tie}`;
        }

        document.querySelector('.you').innerHTML = `You: ${playerMove}`;
        document.querySelector('.computer').innerHTML = `Computer: has selected ${computerAnswer}`; 

        function yourMove(playerMove){
            const computerAnswer = pickComputerMove();
            let result = '';
            
            if(playerMove === 'Scissors'){
                if(computerAnswer === 'Rock'){
                    result='You Lose!';
                }
                else if(computerAnswer === 'Paper' ){
                    result='You Win!';
                }
                else if(computerAnswer === 'Scissors'){
                    result='Tie';
                }
            }else if(playerMove === 'Paper'){
                if(computerAnswer === 'Rock'){
                    result='You Win!';
                }
                else if(computerAnswer === 'Paper' ){
                    result='Tie';
                }
                else if(computerAnswer === 'Scissors'){
                    result='You Lose!';
                }
            }else if(playerMove === 'Rock'){
                if(computerAnswer === 'Rock'){
                    result='Tie';
                }
                else if(computerAnswer === 'Paper' ){
                    result='You Lose!';
                }
                else if(computerAnswer === 'Scissors'){
                    result='You Win!';
                }
            }
            //Increments scores by 1
            if(result === 'You Win!'){
                score.wins +=1;
            }
            else if(result === 'You Lose!'){
                score.losses +=1;
            }
            else if(result === 'Tie'){
                score.tie +=1;
            }


            console.log(result);
            updateScoreElement();

            localStorage.setItem('score', JSON.stringify(score));
           
            document.querySelector('.js-computer').innerHTML = `You: ${playerMove}  <br>Computer: has selected ${computerAnswer}`; 
            document.querySelector('.js-result').innerHTML = result;


            

            //alert (`You: ${playerMove}  \nComputer: has selected ${computerAnswer}. \nResults: ${result}. \nWins: ${score.wins} Losses: ${score.losses} Ties: ${score.tie}`);
     
        }

        //let computerAnswer = ''; we use the return function

        function pickComputerMove(){
            const randomNumber = Math.random();
            let computerAnswer = '';

            if(randomNumber >= 0 && randomNumber <= 1/3){
                computerAnswer='Rock';
            }
            else if (randomNumber > 1/3 && randomNumber <= 2/3){
                computerAnswer = 'Paper';
            }
            else if(randomNumber > 2/3 && randomNumber <=1){
                computerAnswer = 'Scissors';
            }
            console.log(computerAnswer);

            return computerAnswer;
        }