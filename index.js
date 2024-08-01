const core  = require('@actions/core');
const github = require('@actions/github');
// const { exec } = require('@actions/exec');


var name = core.getInput('name');

function run(name) {
    core.debug('Starting my custom action....');

    if (!name) {
        core.error(`The name was not set and it is required`);
    }
    core.info(`The name is ${name}`);
    var time = (new Date()).toTimeString();
    core.setOutput("time", time);
    
}


run(name);