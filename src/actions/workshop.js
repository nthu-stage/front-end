export function searchWorkshop(searchText, state_filter) {
    return {
        type: 'WORKSHOP_SEARCH',
        payload: [
            { id: 12345,
              image_url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=253%C3%97180&w=253&h=180',
              title: '生活攝影入門',
              start_datetime: new Date("2017/6/30 10:30:12").toString(),
              min_number: 30,
              max_number: 40,
              introduction: '巴菲特重視的競爭優勢、執行團隊、管理階層、企業文化， 便是談判框架的態度、行為與過程。 如何透過談判維持個人和企業競爭優勢？',
              type: 2,
              deadline: 25,
              attendees_number: 25,
            },
            { id: 12,
              image_url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=253%C3%97180&w=253&h=180',
              title: '測試工作坊二',
              start_datetime: new Date("2017/6/25 10:30:12").toString(),
              min_number: 50,
              max_number: 70,
              introduction: '矮油',
              type: 3,
              deadline: 8,
              attendees_number: 52,
            },
        ],
    }
}
