const sections = [
    {
        title: 'Gyümölcsök',
        listItems: [
            {
                content: 'Alma',
                color: 'red',
                backgroundColor: 'green',
                fontSize: '25px',
                textDecoration: 'underline dotted 5px'
            },
            {
                content: 'Narancs',
                color: 'orange',
                backgroundColor: 'pink',
                fontSize: '25px',
                textDecoration: 'overline wavy 10px'
            },
            {
                content: 'Cseresznye',
                color: 'red',
                backgroundColor: 'yellow',
                fontSize: '10px',
                textDecoration: 'underline 190px'                
            },
            {
                content: 'Görögdinnye',
                color: 'green',
                backgroundColor: 'yellow',
                fontSize: '30px',
                textDecoration: 'overline 50px yellow'                
            }
        ],
        apply: ['color', 'fontSize']
    },
    {
        title: 'Zászlók',
        listItems: [
            {
                content: 'AUS',
                color: 'white',
                backgroundColor: 'white',
                fontSize: '200px',
                textDecoration: 'underline overline 12px red'
            },
            {
                content: 'ARG',
                color: 'yellow',
                backgroundColor: 'white',
                fontSize: '200px',
                textDecoration: 'underline overline 12px lightblue'
            },
            {
                content: 'LAT',
                color: 'white',
                backgroundColor: 'white',
                fontSize: '200px',
                textDecoration: 'underline overline 12px darkred'
            },
            {
                content: 'EST',
                color: 'black',
                backgroundColor: 'black',
                fontSize: '200px',
                textDecoration: 'overline 12px #348feb'
            }
        ],
        apply: ['backgroundColor', 'textDecoration', 'color']
    }
]