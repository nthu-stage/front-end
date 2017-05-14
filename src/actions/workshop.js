export function searchWorkshop(searchText, stateFilter) {
    return {
        type: 'WORKSHOP_SEARCH',
        payload: [
            {
                w_id: 12345,
                image_url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=253%C3%97180&w=253&h=180',
                title: '生活攝影入門',
                start_datetime: new Date("2017/6/30 10:30:12").toString(),
                min_number: 30,
                max_number: 40,
                deadline: new Date("2017/5/14 10:30:12").toString(),
                pre_deadline: new Date("2017/5/21 10:30:12").toString(),
                introduction: '巴菲特重視的競爭優勢、執行團隊、管理階層、企業文化， 便是談判框架的態度、行為與過程。 如何透過談判維持個人和企業競爭優勢？',
                price: 0,
                phase: 'investigating',
                attendees_number: 25,
            },
            {
                w_id: 12,
                image_url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=253%C3%97180&w=253&h=180',
                title: '程式設計入門',
                start_datetime: new Date("2017/5/30 10:30:12").toString(),
                min_number: 30,
                max_number: 50,
                deadline: new Date("2017/5/15 10:30:12").toString(),
                pre_deadline: new Date("2017/5/8 10:30:12").toString(),
                introduction: '巴菲特重視的競爭優勢、執行團隊、管理階層、企業文化， 便是談判框架的態度、行為與過程。 如何透過談判維持個人和企業競爭優勢？',
                price: 0,
                phase: 'reached',
                attendees_number: 35,
            },
        ],
    }
}
