let projectData = null;

function retProjectInfo(projectNum){
    let position = null;
    let company = null;

    let specificProject = projectData.split('\n')[projectNum - 1];
    company = specificProject.split('\n')[0];
    position = specificProject.split('\n')[1];
    
    console.log("retString: " + position + ";" + company);
    return position + ";" + company;
}

function selectProject(projectNum){
    console.log("projectNum: " + projectNum);
}

function retrieveBucketFile(){
    const config = require("./config.json");

    try{
        (async function(){
            projectData = await fetch(config.aws.apiEndpoint)
            .then(function(response) {
                return response.text();
            }).then(function(data) {
                return data;
            });
            console.log("Retrieved project data!");
        })();
    } catch(e){
        console.log("Retrieval Error: " + e);
    }
}

retrieveBucketFile();
