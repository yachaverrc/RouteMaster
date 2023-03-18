class Point{
    constructor(position,isCurrent,timeNext){
        this.position = position;
        this.isCurrent = isCurrent;
        this.timeNext = timeNext;
    }

    setNextPoint(next){
        this.next = next;
    }

    setPreviousPoint(previous){
        this.previous = previous;
    }

    previousPoint(){
        this.isCurrent = false;
        if(this.previous){
            this.previous.isCurrent = true;
        }
        return this.previous;
    }

    nextPoint(){
        this.isCurrent = false;
        if(this.next){
            this.next.isCurrent = true;
        }
        return this.next;
    }
}



