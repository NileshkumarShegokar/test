

// starting a new repo
/*
require('simple-git')()
     .init()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', 'https://github.com/NileshkumarShegokar/test.git')
     .push('origin', 'master');
*/



     const USER = 'NileshkumarShegokar';
     const PASS = 'Nilesh0507047';
     const REPO = 'github.com/NileshkumarShegokar/test.git';
      
     const git = require('simple-git/promise');
     const remote = `https://${USER}:${PASS}@${REPO}`;
    /*  
     git().silent(true)
       .clone(remote)
       .then(() => console.log('finished'))
       .catch((err) => console.error('failed: ', err));
*/

       // starting a new repo
require('simple-git')()
.init()
.add('./*')
.commit("first commit!")
//.addRemote('origin', remote)
.push('origin', 'master');