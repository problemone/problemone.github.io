let projectData = null;
let currProjectNum = 1;
let contentElement = null;

function retProjectInfo(projectNum){
    let position = null;
    let company = null;

    let specificProject = projectData[projectNum - 1];
    company = specificProject[0];
    position = specificProject[1];
    
    return company + ";" + position;
}

function selectProject(projectNum){
    contentElement = document.getElementById('content');
    currProjectNum = projectNum;
    try{
        fetch("Sources/projectPages/project"+String(currProjectNum)+".txt")
            .then(response => response.text())
            .then(text => {
                console.log("setting innerHTML");
                console.log(text);
                contentElement.innerHTML = text;
            })
    } catch(e){
        console.log("Project Information Retrieval Error: " + e);
    }

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
        console.log("Project List Retrieval Error: " + e);
    }

    // Set window to top
    window.scrollTo(0, 0);
}

initializeWebsite();
