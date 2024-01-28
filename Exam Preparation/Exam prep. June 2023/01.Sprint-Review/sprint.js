function solve(input) {

    let assignees = [];

    const numberOfAssignees = input.shift();
    const assigneesToAdd = input.splice(0, numberOfAssignees);
    const commands = input;

    for (let i = 0; i < assigneesToAdd.length; i++) {
        addAssgnee(assigneesToAdd[i]);
    }

    for (let i = 0; i < commands.length; i++) {
        const commandInfo = commands[i].split(':');
        const commandName = commandInfo[0];

        if (commandName == 'Add New') {

            let assignee = assignees.find(x => x.assigneeName == commandInfo[1]);

            if (assignee == null) {
                console.log(`Assignee ${commandInfo[1]} does not exist on the board!`);
                continue;
            }
            else {
                commandInfo.splice(0, 2);
                let [taskId, title, taskStatus, estimatedPoints] = commandInfo;

                assignee.tasks.push({ taskId, title, taskStatus, estimatedPoints });
            }
        }
        else if (commandName == 'Change Status') {
            commandInfo.shift();
            const [assigneeName, taskId, newStatus] = commandInfo;

            let assignee = assignees.find(x => x.assigneeName == assigneeName);
            if (assignee == null) {
                console.log(`Assignee ${assigneeName} does not exist on the board!`)
                continue;
            }

            let assigneesTask = assignee.tasks.find(x => x.taskId == taskId);
            if (assigneesTask == null) {
                console.log(`Task with ID ${taskId} does not exist for ${assigneeName}!`);
                continue;
            }

            assigneesTask.taskStatus = newStatus;
        }

        else if (commandName == 'Remove Task') {
            commandInfo.shift(0)
            const [assigneeName, taskIndex] = commandInfo;

            let assignee = assignees.find(x => x.assigneeName == assigneeName);
            if (assignee == null) {
                console.log(`Assignee ${assigneeName} does not exist on the board!`)
                continue;
            }

            let assigneTask = assignee.tasks[taskIndex - 1];
            if (assigneTask == null) {
                console.log(`Index is out of range!`);
                continue;
            }

            assignee.tasks.splice(assigneTask, 1);
        }


    }

    let toDoPoints = calculatePoints('ToDo');
    console.log(`ToDo: ${toDoPoints}pts`);

    let inProgressPoints = calculatePoints('In Progress');
    console.log(`In Progress: ${inProgressPoints}pts`);

    let codeReviewPoints = calculatePoints(`Code Review`);
    console.log(`Code Review: ${codeReviewPoints}pts`);

    let donePoints = calculatePoints(`Done`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints >= inProgressPoints + codeReviewPoints + toDoPoints) {
        console.log(`Sprint was successful!`);
    }
    else {
        console.log(`Sprint was unsuccessful...`);
    }
    function calculatePoints(taskStatus) {

        let totalPoints = 0;

        Object.values(assignees).forEach(assignee => {
            if (assignee.tasks && Array.isArray(assignee.tasks)) {
                assignee.tasks.forEach(task => {
                    if (task.taskStatus == taskStatus) {
                        totalPoints += Number(task.estimatedPoints);
                    }
                });
            }
        });

        return totalPoints;

    }

    function addAssgnee(assigneeInfo) {
        let [assigneeName, taskId, title, taskStatus, estimatedPoints] = assigneeInfo.split(':');

        let assignee = {
            assigneeName: assigneeName,
            tasks: [{
                taskId: taskId,
                title: title,
                taskStatus: taskStatus,
                estimatedPoints: estimatedPoints
            }]
        };

        assignees.push(assignee);
    }
}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])

solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP1216:Done',
    'Change Status:Will:BOP1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP1215:Done',
])