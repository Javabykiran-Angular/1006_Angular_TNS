//json Object
// Key & value format 

// let jsonObj={
//     id:9,
//     "fname":'Sumit',
//     lname:'Raokhande'
// }

// console.log(`
//         ID          :: ${jsonObj.id}
//         First Name  :: ${jsonObj.fname}
//         Last Name   :: ${jsonObj.lname}
// `);

//Array of Object 
let arrObj=[
        {
            id:9,
            "fname":'Sumit',
            lname:'Raokhande',
            country:{
                cid:1,
                cname:'India'
            },
            month:['Jan','May','Dec'],
            result:[
                {
                    subj:"M1",
                    marks:40
                },
                {
                    subj:"M2",
                    marks:45
                },
                {
                    subj:"M3",
                    marks:50
                }
            ]
        },
        {
            id:6,
            "fname":'Kiran',
            lname:'Raokhande',
            country:{
                cid:2,
                cname:'Japan'
            },
            month:['Feb','Aug','Nov'],
            result:[
                {
                    subj:"M1",
                    marks:45
                },
                {
                    subj:"M2",
                    marks:55
                },
                {
                    subj:"M3",
                    marks:60
                }
            ]
        },
        {
            id:3,
            "fname":'Spruha',
            lname:'Raokhande',
            country:{
                cid:3,
                cname:'Us'
            },
            month:['March','July','Oct'],
            result:[
                {
                    subj:"M1",
                    marks:50
                },
                {
                    subj:"M2",
                    marks:55
                },
                {
                    subj:"M3",
                    marks:70
                }
            ]
        }
];

// console.log(arrObj);

for(let i=0;i<arrObj.length;i++){
    console.log(`
        ID          :: ${arrObj[i].id}
        First Name  :: ${arrObj[i].fname}
        Last Name   :: ${arrObj[i].lname}
        Country     :: ${arrObj[i].country.cname}
        Month       :: ${arrObj[i].month.join(" ")}
        ------------ Result----------------     
`);

    // for(let j=0;j<arrObj[i].result.length;j++){
    //     console.log(`
    //             Subject :: ${arrObj[i].result[j].subj}
    //             Marks   ::  ${arrObj[i].result[j].marks}
    //         `);
    // }

    arrObj[i].result.forEach((item)=>{
        console.log(`
                Subject :: ${item.subj}
                Marks   :: ${item.marks}
            `)
    });

}
