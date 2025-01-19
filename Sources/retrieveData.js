let projectData = null;
let currProjectNum = 1;
const bodyElement = document.querySelector("body");
const gameBackColor = rgb(76,76,76);

function retProjectInfo(projectNum){
    let position = null;
    let company = null;

    let specificProject = projectData.split('\n')[projectNum - 1];
    company = specificProject.split(',')[1];
    position = specificProject.split(',')[0];
    
    console.log("retString: " + position + ";" + company);
    return position + ";" + company;
}

function selectProject(projectNum){
    currProjectNum = projectNum;
    document.querySelector("#content").scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    console.log("projectNum: " + projectNum);
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function initializeWebsite(){
    // Hide scrollbar if window is at the top
    window.addEventListener('scroll', () => {
        if (window.scrollY == 0) {
            document.querySelector(".Btn").style.visibility = "hidden";
            bodyElement.style.overflowY = "hidden";
        } else {
            document.querySelector(".Btn").style.visibility = "visible";
            bodyElement.style.overflowY = "visible";
        }

        let percScroll = window.scrollY/window.innerHeight;
        let minColor = 76;
        let colorScale = 170;
        bodyElement.style.backgroundColor = rgb(Math.min(percScroll * colorScale + minColor, minColor + colorScale), Math.min(percScroll * colorScale + minColor, minColor + colorScale), Math.min(percScroll * colorScale + minColor, minColor + colorScale));
    });

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
}

initializeWebsite();
