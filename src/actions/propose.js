export function ppSubmit(img,date,time,loc,speaker,title,content){
        return{
            type: '@PROPOSE/PROPOSE_SUBMIT',
            img_url:img,
            time:time,
            location:loc,
            speaker:speaker,
            speachTitle:title,
            content:content,
        }
}
export function ppUpdate(img,date,time,loc,speaker,title,content,propose_id = '0'){
        return{
            type: '@PROPOSE/PROPOSE_UPDATE',
            img_url:img,
            time:time,
            location:loc,
            speaker:speaker,
            speachTitle:title,
            content:content,
            propose_id:propose_id,
            ///should ask for api to update date of Propose(propose_id)
        }
}



