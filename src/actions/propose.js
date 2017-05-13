export function ppSubmit(img_url,start_datetime,end_datetime,location,content,title,min_number,max_number,deadline,introduction,price){
        return{
            type: '@PROPOSE/PROPOSE_SUBMIT',
            img_url:img_url,
            start_datetime:start_datetime,
            end_datetime:end_datetime,
            location:location,
            content:content,
            title:title,
            min_number:min_number,
            max_number:max_number,
            deadline:deadline,
            introduction:introduction,
            price:price,
            payload:{
                w_id:100000,
                code:200
                /////undone
            }

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



