

export class FriendAge {
    constructor(name, year, month, day){
        this.name =name
        this.year = year
        this.month = month
        this.day = day
    }
    returnAge(){
        if  (this.month <= 12 && this.day <= 31) {
                this.age = (2025 - this.year);
        }
        else { this.age = (2025 - this.year - 1);
        }   
        return (`${this.name} is ${this.age} today!`)
    }
}

const friend = new FriendAge('Julian', 2006, 12, 28)
console.log(friend);
console.log(friend.returnAge());

