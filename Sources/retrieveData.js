function retProjectInfo(projectNum){
    if(projectNum%2 == 0){
        position = "Yearlong Intelligent Robotics Group Intern";
        company = "NASA Ames Research Center";
    }
    else{
        position = "Machine Learning Intern";
        company = "Meta";
    }
    
    console.log("retString: " + position + ";" + company);
    return position + ";" + company;
}

function selectProject(projectNum){
    console.log("projectNum: " + projectNum);
}

