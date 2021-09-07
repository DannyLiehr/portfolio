var skillBar= document.querySelector('#skilltable');

var currentYear= new Date().getFullYear();

var skills = [
    {name: "Javascript", type: "Hard Skill", desc: "Computer programming using Javascript. Includes Object Oriented Programming.", category: ['Software Engineering'], years: (currentYear-2017)},
    {name: "Java", type: "Hard Skill", desc: "Computer programming using Java. Includes other skills like REST and using Android Studio.", category: ['Software Engineering'], years: (currentYear-2017)},
    {name: "Python", type: "Hard Skill", desc: "Computer programming using Python. Includes Object Oriented Programming.", category: ['Software Engineering'], years: (currentYear-2018)},
    {name: "Lua", type: "Hard Skill", desc: "Computer programming using Lua.", category: ['Software Engineering'], years: (currentYear-2015)},
    {name: "PHP", type: "Hard Skill", desc: "Website creation using PHP.", category: ['Software Engineering'], years: (currentYear-2019)},
    {name: "Bash", type: "Hard Skill", desc: "Basic scripting using Bash.", category: ['Software Engineering'], years: (currentYear-2018)},
    {name: "REST API", type: "Hard Skill", desc: "Querying data using GET/POST requests. Can use APIs in Python, JS, and PHP. Has used REST with Java.", category: ['Software Engineering'], years: (currentYear-2019)},
    {name: "SEO (Search Engine Optimization)", type: "Hard Skill", desc: "Using keywords, improving backend and using semantically correct HTML to put a page onto Google.", category: ['Software Engineering'], years: (currentYear-2018)},
    {name: "Illustration", type: "Hard Skill", desc: "Producing images of a subject either traditionally or digitally. Includes traditional illustration and Adobe Illustrator.", category: ['Graphic Design', 'Fine Arts'], years: (currentYear-2014)},
    {name: "Creativity", type: "Soft Skill", desc: "The ability to use your imagination.", category: ['Graphic Design', 'Fine Arts', 'Software Engineering'], years: "Lifelong"},
    {name: "Adobe Illustrator", type: "Hard Skill", desc: "Producing vector images using Adobe Illustrator.", category: ['Graphic Design'], years: (currentYear-2013)},
    {name: "Adobe InDesign", type: "Hard Skill", desc: "Producing printable documents and layous using Adobe Indesign.", category: ['Graphic Design'], years: (currentYear-2013)},
    {name: "Empathy", type: "Soft Skill", desc: "Being able to understand the feelings of others and their point of view. Specifically, clients and customers.", category: ['Customer Service', 'Software Engineering', 'Graphic Design'], years: "Lifelong"},
    {name: "Thick Skin", type: "Soft Skill", desc: "Being able to keep emotions under control in heated or stressful situaions.", category: ['Customer Service', 'Software Engineering', 'Graphic Design'], years: "Lifelong"},
    {name: "Money Counting", type: "Hard Skill", desc: "To count a stack of money with speed and accuracy.", category: ['Customer Service'], years: (currentYear- 2014)},
    {name: "Inventory Management", type: "Hard Skill", desc: "Counting inventory of items in a store, and ordering accordingly.", category: ['Customer Service'], years: (currentYear- 2018)},
    {name: "Scheduling", type: "Hard Skill", desc: "Creating schedules for employees based on availablity and staff load.", category: ['Customer Service'], years: (currentYear- 2018)},
    {name: "Windows 7", type: "Hard Skill", desc: "Navigating Windows 7 Operating System.", category: ['Customer Service', 'Graphic Design'], years: (currentYear- 2008)},
    {name: "Windows 10", type: "Hard Skill", desc: "Navigating Windows 10 Operating System.", category: ['Customer Service', 'Graphic Design'], years: (currentYear- 2015)},
    {name: "Linux Terminals", type: "Hard Skill", desc: "Navigating Linux terminals for server management. (Red Hat, Ubuntu)", category: ['Software Engineering'], years: (currentYear- 2018)},
    {name: "Mac OSX", type: "Hard Skill", desc: "Navigating Mac OSX for various tasks (such as making this portfolio website).", category: ['Software Engineering'], years: (currentYear- 2013)},
    {name: "Colour Theory", type: "Soft Skill", desc: "The understanding of rules for mixing and choosing colours to create appealing and visually relevant layouts.", category: ['Software Engineering', 'Graphic Design', 'Fine Arts'], years: `At least ${(currentYear- 2012)}`},
];

function presentSkills(){
    // Make an array of skills based on the search term provided.
    var tableLength = skillBar.rows.length;
    if (tableLength > 1){
        // Table populated. Clear it.
        document.querySelector('#skilllist').innerHTML = "";
    }
    let term = document.querySelector('#skillSelect').value;
    let searchRes = Object.assign([]);
    let results= 0;
    for (skill in skills){
        let currentSkill= skills[skill];
        let skillBody= skillBar.getElementsByTagName('tbody')[0] || document.createElement('tbody');
        let row = skillBody.insertRow(0);
        row.className = "removable";
        document.querySelector('.removable').style.animation="fadeInAnimation 1s linear 1";

        // Make Switch/Case?
        if (term== "See All..."){
            searchRes.push(currentSkill);
            results++;
        } else if ((currentSkill.category).includes(term)){
                results++;
                searchRes.push(currentSkill);
            }
    }
    // If nothing showed up?
    if (results==0){
        let skillBody= skillBar.getElementsByTagName('tbody')[0] || document.createElement('tbody');
        let row = skillBody.insertRow(0);
        row.className = "removable";
        document.querySelector('.removable').style.animation="fadeInAnimation 1s linear 1";
        cell1= row.insertCell(0);
        return cell1.innerHTML=`<td colspan="3">Nothing came up. Try searching for something else?</td>`;
    }
    for (item in searchRes){
        let cS= searchRes[item];
        let skillBody= skillBar.getElementsByTagName('tbody')[0] || document.createElement('tbody');
        let row = skillBody.insertRow(0);
        // Proceed with populating fields.
        let cell1 = row.insertCell(0);
        // let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(1);
        let cell4 = row.insertCell(2);
        cell1.innerHTML=`${cS.name}`;
        // cell2.innerHTML=`${currentSkill.type}`;
        cell3.innerHTML=`${cS.desc}`;
        cell4.innerHTML=`${cS.years}`;
        cell1.className += "centeredtxt";
        cell3.className += "centeredtxt";
        cell4.className += "centeredtxt";
    }
}
