
export class DartCounter {

    playerScore:number;
    botscore:number;

    constructor() {
        this.playerScore = 501;
        this.botscore = 501;
    }

    subPlayerScore(amount:number):void {

        if(amount > 180) {
            amount = 180;
            alert("Dein Wurf darf nicht größer als 180 sein!");
        }
        

        let lastScore:number = this.playerScore;

        this.playerScore = this.playerScore - amount;

        if(this.playerScore < 0)
            this.playerScore = lastScore

        if(this.playerScore === 0) {
            alert("Du hast gewonnen!");
            window.location.reload();
        }
        
    }

    botThrow():void {

        let lastScore:number = this.botscore;
        let rnd:number = Math.round(Math.random() * 180) + 1;

        this.botscore = this.botscore - rnd;

        if(this.botscore < -30)
            this.botscore = lastScore;

        if(this.botscore <= 0 && this.botscore >= -30) {
            this.botscore = 0;
            alert("Dein Gegner hat gewonnen!")
            window.location.reload();
        }
            

    }

}