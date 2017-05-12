export function ppSubmit(img,date,time,loc,speaker,title,content){
        return{
            type: '@PROPOSE/PROPOSE_SUBMIT',
            imgUrl:img,
            time:time,
            location:loc,
            speaker:speaker,
            speachTitle:title,
            content:content,
        }
}


