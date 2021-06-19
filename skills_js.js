var skillBar= document.querySelector('#skilltable');

var currentYear= new Date().getFullYear();

var skills = [
    {name: "Javascript", type: "Hard Skill", desc: "Computer programming using Javascript. Includes Object Oriented Programming.", category: ['Software Engineering'], years: (currentYear-2017)},
    {name: "Python", type: "Hard Skill", desc: "Computer programming using Python. Includes Object Oriented Programming.", category: ['Software Engineering'], years: (currentYear-2018)},
    {name: "Lua", type: "Hard Skill", desc: "Computer programming using Lua.", category: ['Software Engineering'], years: (currentYear-2015)},
    {name: "PHP", type: "Hard Skill", desc: "Website creation using PHP.", category: ['Software Engineering'], years: (currentYear-2019)},
    {name: "Bash", type: "Hard Skill", desc: "Basic scripting using Bash.", category: ['Software Engineering'], years: (currentYear-2018)},
    {name: "Illustration", type: "Hard Skill", desc: "Producing images of a subject either traditionally or digitally. Includes traditional illustration and Adobe Illustrator.", category: ['Graphic Design', 'Fine Arts'], years: (currentYear-2014)},
    {name: "Creativity", type: "Soft Skill", desc: "The ability to use your imagination.", category: ['Graphic Design', 'Fine Arts', 'Software Engineering'], years: "Lifelong"},
    {name: "Adobe Illustrator", type: "Hard Skill", desc: "Producing vector images using Adobe Illustrator.", category: ['Graphic Design'], years: (currentYear-2013)},
    {name: "Adobe InDesign", type: "Hard Skill", desc: "Producing vector images using Adobe Illustrator.", category: ['Graphic Design'], years: (currentYear-2013)},
    {name: "Empathy", type: "Soft Skill", desc: "Being able to understand the feelings of others and their point of view. Specifically, clients and customers.", category: ['Customer Service', 'Software Engineering', 'Graphic Design'], years: "Lifelong"},
    {name: "Thick Skin", type: "Soft Skill", desc: "Being able to keep emotions under control in heated or stressful situaions.", category: ['Customer Service', 'Software Engineering', 'Graphic Design'], years: "Lifelong"},
    {name: "Money Counting", type: "Hard Skill", desc: "To count a stack of money with speed and accuracy.", category: ['Customer Service'], years: (currentYear- 2014)},
    {name: "Inventory Management", type: "Hard Skill", desc: "Counting inventory of items in a store, and ordering accordingly.", category: ['Customer Service'], years: (currentYear- 2018)},
    {name: "Scheduling", type: "Hard Skill", desc: "Creating schedules for employees based on availablity and staff load.", category: ['Customer Service'], years: (currentYear- 2018)},
    {name: "Windows 7", type: "Hard Skill", desc: "Navigating Windows 7 Operating System.", category: ['Customer Service', 'Graphic Design'], years: (currentYear- 2008)},
    {name: "Windows 10", type: "Hard Skill", desc: "Navigating Windows 10 Operating System.", category: ['Customer Service', 'Graphic Design'], years: (currentYear- 2015)},
    {name: "Linux Terminals", type: "Hard Skill", desc: "Navigating Linux terminals for server management. (Red Hat, Ubuntu)", category: ['Software Engineering'], years: (currentYear- 2018)},
    {name: "Mac OSX", type: "Hard Skill", desc: "Navigating Mac OSX for various tasks (such as making this portfolio website).", category: ['Software Engineering'], years: (currentYear- 2013)},
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
        if ((currentSkill.category).includes(term)){
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                cell1.innerHTML=`${currentSkill.name}`;
                cell2.innerHTML=`${currentSkill.type}`;
                cell3.innerHTML=`${currentSkill.desc}`;
                cell4.innerHTML=`${currentSkill.years}`;
                results++;
            }
    }
    // If nothing showed up?
    console.log(skillBar.rows.length);
    if (results==0){
        let skillBody= skillBar.getElementsByTagName('tbody')[0] || document.createElement('tbody');
        let row = skillBody.insertRow(0);
        row.className = "removable";
        document.querySelector('.removable').style.animation="fadeInAnimation 1s linear 1";
        cell1= row.insertCell(0);
        cell1.innerHTML=`<td colspan="4">Nothing came up. Try searching for something else?</td>`;
    }
}
