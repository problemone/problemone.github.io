let projectData = null;
let currProjectNum = 1;

function retProjectInfo(projectNum){
    let position = null;
    let company = null;

    let specificProject = projectData[projectNum - 1];
    company = specificProject[1];
    position = specificProject[0];
    
    return position + ";" + company;
}

function selectProject(projectNum){
    currProjectNum = projectNum;
    document.querySelector("#content").scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
}

function initializeWebsite(){
    // Retrieve file with project info

    try{
        fetch('Sources/projectPages/websiteProjects.csv')
            .then(response => response.text())
            .then(text => {
                projectData = text.split("\n").map(row => row.split(","));
            })
    } catch(e){
        console.log("Retrieval Error: " + e);
    }

    // Set window to top
    window.scrollTo(0, 0);
}

initializeWebsite();
