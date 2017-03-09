export class Doctor {
    name: string;
    id: number;
    types = [];
    stats = [];

    formattedName() {
        return this.name ? this.name[0].toUpperCase() + this.name.substr(1) : "";
    }

    image() {
        return "https://raw.githubusercontent.com/fernando-barbosa/whovians/master/src/assets/images/" + this.id + ".png";
    }
}