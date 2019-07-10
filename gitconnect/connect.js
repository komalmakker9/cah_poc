#! /usr/local/bin/node

//Authentication

const USER = 'komalmakker9';
const PASS = '446532.Rune';
const REPO = 'github.com/komalmakker9/cah_poc.git';
const git = require('simple-git/promise');
//const git = gitP(__dirname);
const remote = `https://${USER}:${PASS}@${REPO}`;
 
git().silent(true)
  //.clone(remote)
  //.then(() => console.log('cloned'))
  //.catch((err) => console.error('failed: ', err));
  
//here, implementing git push

require('simple-git')()
     .add('./*')
     .commit("first commit!")
     //.addRemote('origin', `https://${USER}:${PASS}@${REPO}`)
	 .fetch (`https://${USER}:@${REPO}`)
     .push(['-u', 'origin', 'master'], () => console.log('done'));
