

// @@@@@@@@@@ Questions %%%%%%%%%%%%%%%%%%
let askAns =[
    {
        ask:'where is the capital of Afghasitan ?',
        ans1:'Kabul',
        ans2:'Mazar',
        ans3:'Ghazni',
        ans4:'Bamian'
    },
    {
        ask:'who was the first persident of afganistan ?',
        ans1:'Karzi',
        ans2:'Ahmad sha',
        ans3:'kabir',
        ans4:'none of them'
    },    {
        ask:'which of them are the native language of AFG ?',
        ans1:'Dari and pashto',
        ans2:'English and Dari',
        ans3:'English and Pashto',
        ans4:'none'
    },
    {
        ask:'which nation are you in?',
        ans1:' pashton',
        ans2:' tajic',
        ans3:'hazara',
        ans4:'azbic'
    }
];
const firstapp = document.getElementById('firstapp');
const secondapp = document.getElementById('secondapp');
const thirdapp = document.getElementById('thirdapp');
const fourtapp = document.getElementById('fourtapp');
const fivtapp = document.getElementById('fivtapp');

const container = document.getElementById('container');
const container1 = document.getElementById('container1');
const question = document.getElementById('question');
const firstans = document.getElementById('firstan');
const secondans = document.getElementById('secondan');
const thirdans = document.getElementById('thirdan');
const fourtans = document.getElementById('fourtan');
const tru = document.getElementById('true');
const fals= document.getElementById('false');

firstapp.addEventListener('click',function(){
    container.style.display = 'none';
    container1.style.display = 'block';
    question.innerHTML = askAns[0].ask;
    let f1 =firstans.innerHTML =askAns[0].ans1;
    let f2 =secondans.innerHTML = askAns[0].ans2;
    let f3 =thirdans.innerHTML =askAns[0].ans3;
    let f4 =fourtans.innerHTML = askAns[0].ans4;
    const score = 0;
    
    secondans.addEventListener('click',function(){
        secondclick(1);
    });
    thirdans.addEventListener('click',function(){
        secondclick(1);
    });
    fourtans.addEventListener('click',function(){
        secondclick(1);   
    }); 
    firstans.addEventListener('click',function (){     
        firsclick(1);
        fourtans.addEventListener('click',function(){
            firsclick(2);
        secondans.addEventListener('click',function(){
            secondclick(2);
        });
        thirdans.addEventListener('click',function(){
            secondclick(2);
        });
        firstans.addEventListener('click',function(){
            secondclick(2);   
        });
            firstans.addEventListener('click',function(){
                firsclick(3)

                secondans.addEventListener('click',function(){
                    secondclick(3);
                });
                thirdans.addEventListener('click',function(){
                    secondclick(3);
                });
                fourtans.addEventListener('click',function(){
                    secondclick(3);   
                });
                thirdans.addEventListener('click',function(){
                    tru.innerHTML = score+4;
                    question.innerHTML = `END <br> Your score is${score+tru.innerHTML}`;
                    let f1 =firstans.innerHTML ='Click here';
                    let f2 =secondans.innerHTML ='Click here';
                    let f3 =thirdans.innerHTML ='Click here';
                    let f4 =fourtans.innerHTML = 'Click here';
                    
                    firstans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    secondans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });      
                    thirdans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    fourtans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                })
            })
        })
    });  
});

secondapp.addEventListener('click',function(){
    container.style.display = 'none';
    container1.style.display = 'block';
    question.innerHTML = askAns[0].ask;
    let f1 =firstans.innerHTML =askAns[0].ans1;
    let f2 =secondans.innerHTML = askAns[0].ans2;
    let f3 =thirdans.innerHTML =askAns[0].ans3;
    let f4 =fourtans.innerHTML = askAns[0].ans4;
    const score = 0;
    
    secondans.addEventListener('click',function(){
        secondclick(1);
    });
    thirdans.addEventListener('click',function(){
        secondclick(1);
    });
    fourtans.addEventListener('click',function(){
        secondclick(1);   
    }); 
    firstans.addEventListener('click',function (){     
        firsclick(1);
        fourtans.addEventListener('click',function(){
            firsclick(2);
        secondans.addEventListener('click',function(){
            secondclick(2);
        });
        thirdans.addEventListener('click',function(){
            secondclick(2);
        });
        firstans.addEventListener('click',function(){
            secondclick(2);   
        });
            firstans.addEventListener('click',function(){
                firsclick(3)

                secondans.addEventListener('click',function(){
                    secondclick(3);
                });
                thirdans.addEventListener('click',function(){
                    secondclick(3);
                });
                fourtans.addEventListener('click',function(){
                    secondclick(3);   
                });
                thirdans.addEventListener('click',function(){
                    tru.innerHTML = score+4;
                    question.innerHTML = `END <br> Your score is${score+tru.innerHTML}`;
                    let f1 =firstans.innerHTML ='Click here';
                    let f2 =secondans.innerHTML ='Click here';
                    let f3 =thirdans.innerHTML ='Click here';
                    let f4 =fourtans.innerHTML = 'Click here';
                    
                    firstans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    secondans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });      
                    thirdans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    fourtans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                })
            })
        })
    });  
});
thirdapp.addEventListener('click',function(){
    container.style.display = 'none';
    container1.style.display = 'block';
    question.innerHTML = askAns[0].ask;
    let f1 =firstans.innerHTML =askAns[0].ans1;
    let f2 =secondans.innerHTML = askAns[0].ans2;
    let f3 =thirdans.innerHTML =askAns[0].ans3;
    let f4 =fourtans.innerHTML = askAns[0].ans4;
    const score = 0;
    
    secondans.addEventListener('click',function(){
        secondclick(1);
    });
    thirdans.addEventListener('click',function(){
        secondclick(1);
    });
    fourtans.addEventListener('click',function(){
        secondclick(1);   
    }); 
    firstans.addEventListener('click',function (){     
        firsclick(1);
        fourtans.addEventListener('click',function(){
            firsclick(2);
        secondans.addEventListener('click',function(){
            secondclick(2);
        });
        thirdans.addEventListener('click',function(){
            secondclick(2);
        });
        firstans.addEventListener('click',function(){
            secondclick(2);   
        });
            firstans.addEventListener('click',function(){
                firsclick(3)

                secondans.addEventListener('click',function(){
                    secondclick(3);
                });
                thirdans.addEventListener('click',function(){
                    secondclick(3);
                });
                fourtans.addEventListener('click',function(){
                    secondclick(3);   
                });
                thirdans.addEventListener('click',function(){
                    tru.innerHTML = score+4;
                    question.innerHTML = `END <br> Your score is${score+tru.innerHTML}`;
                    let f1 =firstans.innerHTML ='Click here';
                    let f2 =secondans.innerHTML ='Click here';
                    let f3 =thirdans.innerHTML ='Click here';
                    let f4 =fourtans.innerHTML = 'Click here';
                    
                    firstans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    secondans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });      
                    thirdans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    fourtans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                })
            })
        })
    });  
});
fourtapp.addEventListener('click',function(){
    container.style.display = 'none';
    container1.style.display = 'block';
    question.innerHTML = askAns[0].ask;
    let f1 =firstans.innerHTML =askAns[0].ans1;
    let f2 =secondans.innerHTML = askAns[0].ans2;
    let f3 =thirdans.innerHTML =askAns[0].ans3;
    let f4 =fourtans.innerHTML = askAns[0].ans4;
    const score = 0;
    
    secondans.addEventListener('click',function(){
        secondclick(1);
    });
    thirdans.addEventListener('click',function(){
        secondclick(1);
    });
    fourtans.addEventListener('click',function(){
        secondclick(1);   
    }); 
    firstans.addEventListener('click',function (){     
        firsclick(1);
        fourtans.addEventListener('click',function(){
            firsclick(2);
        secondans.addEventListener('click',function(){
            secondclick(2);
        });
        thirdans.addEventListener('click',function(){
            secondclick(2);
        });
        firstans.addEventListener('click',function(){
            secondclick(2);   
        });
            firstans.addEventListener('click',function(){
                firsclick(3)

                secondans.addEventListener('click',function(){
                    secondclick(3);
                });
                thirdans.addEventListener('click',function(){
                    secondclick(3);
                });
                fourtans.addEventListener('click',function(){
                    secondclick(3);   
                });
                thirdans.addEventListener('click',function(){
                    tru.innerHTML = score+4;
                    question.innerHTML = `END <br> Your score is${score+tru.innerHTML}`;
                    let f1 =firstans.innerHTML ='Click here';
                    let f2 =secondans.innerHTML ='Click here';
                    let f3 =thirdans.innerHTML ='Click here';
                    let f4 =fourtans.innerHTML = 'Click here';
                    
                    firstans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    secondans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });      
                    thirdans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    fourtans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                })
            })
        })
    });  
});
fivtapp.addEventListener('click',function(){
    container.style.display = 'none';
    container1.style.display = 'block';
    question.innerHTML = askAns[0].ask;
    let f1 =firstans.innerHTML =askAns[0].ans1;
    let f2 =secondans.innerHTML = askAns[0].ans2;
    let f3 =thirdans.innerHTML =askAns[0].ans3;
    let f4 =fourtans.innerHTML = askAns[0].ans4;
    const score = 0;
    
    secondans.addEventListener('click',function(){
        secondclick(1);
    });
    thirdans.addEventListener('click',function(){
        secondclick(1);
    });
    fourtans.addEventListener('click',function(){
        secondclick(1);   
    }); 
    firstans.addEventListener('click',function (){     
        firsclick(1);
        fourtans.addEventListener('click',function(){
            firsclick(2);
        secondans.addEventListener('click',function(){
            secondclick(2);
        });
        thirdans.addEventListener('click',function(){
            secondclick(2);
        });
        firstans.addEventListener('click',function(){
            secondclick(2);   
        });
            firstans.addEventListener('click',function(){
                firsclick(3)

                secondans.addEventListener('click',function(){
                    secondclick(3);
                });
                thirdans.addEventListener('click',function(){
                    secondclick(3);
                });
                fourtans.addEventListener('click',function(){
                    secondclick(3);   
                });
                thirdans.addEventListener('click',function(){
                    tru.innerHTML = score+4;
                    question.innerHTML = `END <br> Your score is${score+tru.innerHTML}`;
                    let f1 =firstans.innerHTML ='Click here';
                    let f2 =secondans.innerHTML ='Click here';
                    let f3 =thirdans.innerHTML ='Click here';
                    let f4 =fourtans.innerHTML = 'Click here';
                    
                    firstans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    secondans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });      
                    thirdans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                    fourtans.addEventListener('click',function(){
                        container.style.display = 'block';
                        container1.style.display = 'none';
                    });
                })
            })
        })
    });  
});


const back = document.getElementById('back');
const forward = document.getElementById('forward');
back.addEventListener('click',function(){
    history.back();
});
forward.addEventListener('click',function(){
    history.forward();
})

function firsclick(index){        
        question.innerHTML = askAns[index].ask;
        let f1 =firstans.innerHTML =askAns[index].ans1;
        let f2 =secondans.innerHTML = askAns[index].ans2;
        let f3 =thirdans.innerHTML =askAns[index].ans3;
        let f4 =fourtans.innerHTML = askAns[index].ans4;
        tru.innerHTML ++;
    }
function secondclick(falsindex){
        question.innerHTML = askAns[falsindex].ask;
        let f1 =firstans.innerHTML =askAns[falsindex].ans1;
        let f2 =secondans.innerHTML = askAns[falsindex].ans2;
        let f3 =thirdans.innerHTML =askAns[falsindex].ans3;
        let f4 =fourtans.innerHTML = askAns[falsindex].ans4;
        fals.innerHTML ++;
    }








//     firstans.addEventListener('click',function (){        
//         question.innerHTML = askAns[1].ask;
//         let f1 =firstans.innerHTML =askAns[1].ans1;
//         let f2 =secondans.innerHTML = askAns[1].ans2;
//         let f3 =thirdans.innerHTML =askAns[1].ans3;
//         let f4 =fourtans.innerHTML = askAns[1].ans4;
//         tru.innerHTML =score+1;
//         fourtans.addEventListener('click',function(){
//             question.innerHTML = askAns[2].ask;
//             let f1 =firstans.innerHTML =askAns[2].ans1;
//             let f2 =secondans.innerHTML = askAns[2].ans2;
//             let f3 =thirdans.innerHTML =askAns[2].ans3;
//             let f4 =fourtans.innerHTML = askAns[2].ans4;
//             tru.innerHTML = score+2;
//             firstans.addEventListener('click',function(){
//                 question.innerHTML = askAns[3].ask;
//                 let f1 =firstans.innerHTML =askAns[3].ans1;
//                 let f2 =secondans.innerHTML = askAns[3].ans2;
//                 let f3 =thirdans.innerHTML =askAns[3].ans3;
//                 let f4 =fourtans.innerHTML = askAns[3].ans4;
//                 tru.innerHTML = score+3;  
//                 thirdans.addEventListener('click',function(){
//                     tru.innerHTML = score+4;
//                     question.innerHTML = `END <br> Your score is${score+tru.innerHTML}`;
//                     let f1 =firstans.innerHTML ='Click here';
//                     let f2 =secondans.innerHTML ='Click here';
//                     let f3 =thirdans.innerHTML ='Click here';
//                     let f4 =fourtans.innerHTML = 'Click here';
                    
//                     firstans.addEventListener('click',function(){
//                         container.style.display = 'block';
//                         container1.style.display = 'none';
//                     });
//                     secondans.addEventListener('click',function(){
//                         container.style.display = 'block';
//                         container1.style.display = 'none';
//                     });      
//                     thirdans.addEventListener('click',function(){
//                         container.style.display = 'block';
//                         container1.style.display = 'none';
//                     });
//                     fourtans.addEventListener('click',function(){
//                         container.style.display = 'block';
//                         container1.style.display = 'none';
//                     });
//                 })
//             })
//         })
//     });
// })












