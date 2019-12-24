/*	
	- https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js
	
	- https://social.technet.microsoft.com/Forums/windows/en-US/a5593733-a7b5-4079-a3ab-a1f9b29532f7/setx-command-error-access-tot-he-registry-path-is-denied?forum=w7itprogeneral
*/

const {spawnSync} = require("child_process");

// setx  -m  MyDownloads  H:\temp\downloads
var result = spawnSync('setx', ['-m', 'MyDownloads', 'H:\\temp\\downloads'])

// STDOUT
var stdOut = result.stdout.toString();
console.log(stdOut)

// STDERR
var stdErr =  result.stderr.toString();

if(stdErr === '') {
	console.log('Successfully set environment variable')
} else {
	console.log(`ERROR: ${stderr}`)
}
