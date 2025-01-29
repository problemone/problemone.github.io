let projectData = null;
let currProjectNum = 1;

function retProjectInfo(projectNum){
    let position = null;
    let company = null;

    let specificProject = projectData.split('\n')[projectNum - 1];
    company = specificProject.split(',')[1];
    position = specificProject.split(',')[0];
    
    return position + ";" + company;
}

function selectProject(projectNum){
    currProjectNum = projectNum;
    document.querySelector("#content").scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
}

function initializeWebsite(){
    // Retrieve s3 bucket file with project info
    const config = {
        "apiEndpoint": "https://sdr9a8oax0.execute-api.us-east-2.amazonaws.com/dev/nicholasverzicwebsiteprojects/websiteProjects.csv"
    };

    try{
        (async function(){
            projectData = await fetch(config["apiEndpoint"])
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

    // Set window to top
    window.scrollTo(0, 0);
}

initializeWebsite();
