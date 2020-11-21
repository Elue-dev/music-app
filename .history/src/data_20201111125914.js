import {v4 as uuidv4 } from 'uuid'

function chillHop() {
    return [
        {
            name: "Jazz Cabbage",
            artist: "Ian Ewing, Strehlow",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: [ "#BA4AA4", "#FDF0DD" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9363"
        },
        {
            name: "Lagoons",
            artist: "Strehlow, Chris Mazuera",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: [ "#BA4AA4", "#FDF0DD" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8266"
        },
     {
            name: "Sails",
            artist: "Strehlow, Aylior",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
               id: uuidv4(),
            active: false,
            color: [ "#BA4AA4", "#FDF0DD" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9355"
        },
        {
            name: "Central Coast",
            artist: "Ian Ewing, Strehlow",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
               id: uuidv4(),
            active: false,
            color: [ "#BA4AA4", "#FDF0DD" ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9364"
        }

    ];
    
    
        
}


export default chillHop;