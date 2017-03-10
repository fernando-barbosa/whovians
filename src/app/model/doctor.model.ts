export class Doctor {
    name: string;
    id: number;
    actor: string;
    appearance: string;
    companions = [];
    types = [];
    stats = [];
    
    formattedName() {
        return this.name;
    }

    image() {
        return "https://raw.githubusercontent.com/fernando-barbosa/whovians/master/src/assets/images/" + this.id + ".png";
    }
}