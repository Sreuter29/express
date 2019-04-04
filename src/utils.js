export const add =(a,b) => a+b

export const dayTime = (hour) =>{
    if (hour<0 || hour > 23){
        throw new Error ('invalid hour')
    }
    else if (hour >= 0 && hour <= 6){
        return "night";
        
    }
    else if (hour >= 7 && hour <= 12){
        return "morning";
        
    }
    else if (hour >= 13 && hour <= 17){
        return "afternoon";
        
    }
    else if (hour >= 18 && hour <= 23){
        return "evening";
        
    }
}