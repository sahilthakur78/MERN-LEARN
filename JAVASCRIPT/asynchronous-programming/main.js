function blockingtask(){
    console.log('task 1 long task running');
    const starttime=Date.now();
    while(Date.now()-starttime<5000){}
    console.log('step 2 task completed');
}
blockingtask(); 