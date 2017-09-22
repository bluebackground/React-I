import React from 'react';
// TODO: Install flip move.
// import FlipMove from 'react-flip-move';

import TitleBar from './TitleBar.js';
import TaskPanel from './TaskPanel.js';
import NotificationPanel from './NotificationPanel.js';
// import taskArray from './taskArray.js';

// import Task from './../class_data/Task.js';
// import TaskList from './../class_data/TaskList.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: new TaskList(),
      currentTask: undefined,
      archivedTasks: new TaskList(),
      activeTasks: new TaskList(),
      compliments: ['Nice job!', 'Well done!', 'Keep it up!', "You're doing wonderful!", "You're really going strong!", "Don't stop, you're on to something!", "Fabulous!", "Amazing!", "Unstoppable!"],
      currentCompliment: ''
    }
  }

  //
  // Saving and Restoring to Local
  //

  _saveToLocal() {
    // Get the testData arr.
    // Loop over it.
    // Save each task object from the array to local storage as a json string.

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };
//
// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));
//
// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');
//
// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }
  _restoreFromLocal(){
    // Loop Through each local storage object that is known.
    // Create a task object and add it to the state.taskData storage.
    // destringify
  }



  //
  // Updating this.state
  //

  _setCurrentTask(index = undefined) {
    if(index) {
      this.setState({currentTask: this.state.taskData.getTaskByIndex(index)});
    }
  }
  _getRandomCompliment() {
    let compli = this.state.compliments;
    console.log(compli);
    return compli[Math.floor(Math.random()*compli.length)]
  }
  _updateCurrentCompliment() {
    let words = this._getRandomCompliment();
    console.log(words);
    this.setState({currentCompliment: words});
  }
  _getRandomTask() {
    let tasks = this.state.taskData;
    return tasks.getRandomTask();
  }
  _updateRandomCurrentTask() {
    let rTask = this._getRandomTask();
    console.log(rTask);
    this.setState({currentTask: rTask});
  }

  //
  // Updating the TASK
  //

  _setTaskCompletedByIndex(index, bool=true) {
    let tasks = this.state.taskData;
    tasks.setCompleted(index, bool)
    this.setState({taskData: tasks});
  }
  _addTagsToTaskByIndex(index, tagsArr, type) {
    //type is a string for what you want to add.
    if (type && tagsArr && type) {
      let thisTask = this.state.taskData.getTaskByIndex(index);
      thisTask.addGeneralTagsToTask(tagsArr, type);
    }
    // Do I need to set state again after changing data values.
  }
  _addTagsToTask(task, tagsArr, type) {
    if (task && type && tagsArr) {
      task.addGeneralTagsToTask(tagsArr, type);
    }
    // Do I need to set state again?
    this.setState({taskData: this.state.taskData});
  }

  //
  // Special Functions
  //
  _parseInputToAddAllTaskAndTags(textString) {

    const symbols = ['#', '@', '.', '+', '*'];
    const dictionary = {
      '#': 'tags',
      '@': 'references',
      '.': 'classCategories',
      '+': 'priorities',
      '*': 'requirements'
    }

    // number of task strings to parse.
    const commaSplitStrings = textString.split(',');
    // do this for each task string in queue.
    commaSplitStrings.forEach((commaSplitString) => {

      // TODO: Develop a way to detect for
      // name="New Task", description="Thishishis",

      // First pass to get the name of the task
      // so that we can create the task.
      // taht the other tags will be added on to.
      const spaceSplitStrings = commaSplitString.split(' ');
      //filter out all the string that start with a special symbol.

      let nameStringArr = spaceSplitStrings;
      symbols.forEach((sym) => {
        nameStringArr = nameStringArr.filter(function(string) {
          if (string[0] === sym || string.length === 0) {
            return false;
          }
          return true;
        });
      });
      // console.log(nameStringArr);
      const taskTitle = nameStringArr.join(' ');

      if (taskTitle) {
        const newTask = new Task(taskTitle);

        // console.log(`Inside App.js`);
        // console.log(spaceSplitStrings);
        symbols.forEach((sym) => {

          const filteredSplitStrings = spaceSplitStrings.filter(function(stringUnit){
            if (stringUnit[0] === sym && stringUnit.length > 0) {
              return true;
            }
            return false;
          });
          // console.log(filteredSplitStrings);

          // Doesn't work code below
          // const basicUnitStrings = filteredSplitStrings.split(sym);
          // const type = dictionary[sym];
          // newTask.addGeneralTagsToTask(basicUnitStrings, type);
          // revised, created task above in code.
          // I need to figure out a way to push these to the task.
          // But the task has not been created yet.
          // The reason, is we haven't discovered the name yet we could do a first pass

          let basicUnitStrings = [];
          // This is the second level check for symbols
          filteredSplitStrings.forEach((stringUnit) => {
            basicUnitStrings = basicUnitStrings.concat(stringUnit.split(sym).filter((str) => {
              if (str.length > 0) {
                return true;
              }
              return false;
            }));
            // console.log(basicUnitStrings);
          });
          // get only uniques,
          const s1 = new Set(basicUnitStrings);
          const a1 = [...s1];
          const type = dictionary[sym];
          console.log("a1");
          console.log(a1);
          console.log('type');
          console.log(type);
          newTask.addGeneralTagsToTask(a1, type);
          console.log(newTask);
          // Add this to the task. based on type
          // check symbol
        });

        //FINALLY ADD TASK TO MAIN state tasklist
        this.state.taskData.addTask(newTask);
        // setState();


      // Filter, if word starts with special char. Split up the input string and check for special chars.
      // Select all strings that begin with #
        // Check each of those strings, and split by #
        // Take that array and call addGeneralTagsToTaskFromIndex
        // use filter to get back the rest of the array
        // set type === 'tags'
      // Select all strings that begin with @
        // Check each of those strings, and split by @,
        // Take that array and call addGeneralTagsToTaskFromIndex
        // use filter to getback what's left of the input array,
        // set type === 'references'
      // Select all strings that begin with .
        //Check each of those strings, and split by .,
        //take that array and call addGeneralTagsToTaskFromIndex
        // use filter to getback what's left of the input array,
        // set type === 'classCategories'
      // Select all strings that begin with +
        //Check each of those strings and split by +,
        // take that array and call addGeneralTagsToTaskFromIndex
        // use filter to getback what's left of the input array,
        // set type === 'prioroties',
      // Select All strings that begin with *
        // Check each of thos strings, and spit by *
        // take that aarray and call addGeneralTagsToTaskFromIndex,
        // use filter to getback what's left of the input array,
        // set type === 'requirements'

      // Reveision: added name to task earlier in code, What ever is left over, that is set to taskTitle
      }
      // setState after all tasks have been added.
    });
    this.setState({taskData: this.state.taskData});
  }

  //
  // Updating the TaskList
  //

  // test input Tutor Students #fun#valuable @Michael .mentoring.teaching +medium+high-value *30mins, Clean Shoes #fashion
  //Talk to Joel @Jonathan@Mom@Dad #Family-fun .social +important *30mins*cover_college_stuff
  // _addTaskFromRawInput(textString) {
  //
  // }
  _addTask(options) {
    // TODO: Implement a way to check input
    // TODO: Perform data validation
    let tasks = this.state.taskData;
    tasks.addTaskFromOptions(options);
    console.log(`Inside App - tasks: ${tasks}`);
    console.log(tasks);
    console.log(tasks.getArray());
    this.setState({taskData: tasks});
  }
  _removeTaskByIndex(index) {
    let tasks = this.state.taskData;
    let task = this.state.taskData[index];
    tasks.removeTaskByIndex(index);
    this.setState({taskData: tasks});
    this._archiveTask(task);
  }
  _removeTaskByTitle(taskTitle) {
    let tasks = this.state.taskData;
    let task = tasks.getTaskFromTitle(taskTitle);
    tasks.removeTask(taskTitle);
    this.setState({taskData: tasks});
    this._archiveTask(task);
  }
  _archiveTask(task) {
    let archTasks = this.state.archivedTasks;
    archTasks.addTask(task);
    this.setState({archivedTasks: archTasks});
  }

  _moveTaskUpByIndex(taskIndex) {
    let tasks = this.state.taskData;
    tasks.moveUpByIndex(taskIndex);
    this.setState({taskData: tasks});
  }
  _moveTaskDownByIndex(taskIndex) {
    let tasks = this.state.taskData;
    tasks.moveDownByIndex(taskIndex);
    this.setState({taskData: tasks});
  }
  _shuffletaskArray() {
    let tasks = this.state.taskData;
    tasks.shuffle();
    this.setState({taskData: tasks});
  }
  _reverseShuffletaskArray() {
    let tasks = this.state.taskData;
    tasks.reverseShuffle();
    this.setState({taskData: tasks});
  }
  _getTaskCount() {
    return this.state.taskData.getLength();
  }

  //

  render () {
    const actions = {
      parseInputToAddTaskAndTags: this._parseInputToAddAllTaskAndTags.bind(this),
      addT: this._addTask.bind(this),
      removeT: this._removeTaskByIndex.bind(this),
      // getRandomT: this._getRandomTask.bind(this),
      updateCTRandom: this._updateRandomCurrentTask.bind(this),
      setCurrentT: this._setCurrentTask.bind(this),
      setTCompletedByIndex: this._setTaskCompletedByIndex.bind(this),
      mUp: this._moveTaskUpByIndex.bind(this),
      mDown: this._moveTaskDownByIndex.bind(this),
      shuf: this._shuffletaskArray.bind(this),
      rshuf: this._reverseShuffletaskArray.bind(this),
      updateCC: this._updateCurrentCompliment.bind(this),
      saveToLocal: this._saveToLocal.bind(this),
      restoreFromLocal: this._restoreFromLocal.bind(this)
    }

    const notificationActions = {
      updateCC: this._updateCurrentCompliment.bind(this),
    }
    return (
      <div className="app">
        <TitleBar title="Hello, Jonathan!" subtitle={`${this._getTaskCount()} task(s) ramining`}/>
        <NotificationPanel
          currentCompliment={this.state.currentCompliment}
          actions={notificationActions}/>
        <div className="wrapper">
          <TaskPanel
            currentTask={this.state.currentTask}
            // This taskData is a TaskList Object
            tasksArr={this.state.taskData.getArray()}
            actions={actions}/>
        </div>
      </div>
    );
  }
}

class TaskList {
  constructor(taskArr = []) {
      this.taskArray = taskArr;
      this.taskArray.push(new Task('Wash Dishes'));
      this.taskArray.push(new Task('Plan Weekend'));
      this.taskArray.push(new Task('Clean Car'));
      this.taskArray.push(new Task('Do Lambda Homework'));
      this.taskArray.push(new Task('Buy Groceries'));
      this.taskArray.push(new Task('Bacon'));
  }
  getArray() {
    return this.taskArray;
  }
  getLength() {
    return this.taskArray.length;
  }
  getRandomTask() {
    return this.taskArray[Math.floor(Math.random()*this.taskArray.length)];
  }
  addTask(task){
    this.taskArray.push(task);
  }
  addTaskFromOptions(options = {title: 'untitled', description: 'task description', owner: 'name'}) {
    let newTask = new Task(options.title, options.description, options.owner);
    this.taskArray.push(newTask);
    return newTask;
  }
  removeTaskByTitle(taskTitle) {
    let indexToRemove = this._getIndexFromTitle(taskTitle);
    this.removeTaskByIndex(indexToRemove);
  }
  removeTaskByIndex(index) {
    if (index) {
      this.taskArray.splice(index, 1);
    }
  }
  setCompleted(index, bool) {
    this.taskArray[index].completed = bool;
  }
  getTaskFromTitle(taskTitle) {
    let index = this._getIndexFromTitle(taskTitle);
    return this.getTaskFromIndex(index);
  }
  getTaskByIndex(index) {
    return this.taskArray[index];
  }
  swapTaskPositionFromIndex(index1, index2){
    let task1 = this.taskArray[index1];
    let task2 = this.taskArray[index2];
    // Swap task position in array.
    this.taskArray[index1] = task2;
    this.taskArray[index2] = task1;
  }
  swapTaskPosition(taskTitle1, taskTitle2) {
    let taskIndex1 = this._getIndexFromTitle(taskTitle1);
    let taskIndex2 = this._getIndexFromTitle(taskTitle2);
    this.swapTaskPositionFromIndex(taskIndex1, taskIndex2);
  }
  shuffle() {
    let firstTask = this.taskArray.shift();
    this.taskArray.push(firstTask);
  }
  reverseShuffle() {
    let lastTask = this.taskArray.pop();
    this.taskArray.unshift(lastTask);
  }
  moveDownByIndex(taskIndex) {
    if (taskIndex) {
      if(this._isLast(taskIndex)){
        this.reverseShuffle();
      } else {
        this.swapTaskPositionFromIndex(taskIndex, taskIndex+1);
      }
    }
  }
  moveUpByIndex(taskIndex) {
    if (taskIndex) {
      if(this._isFirst(taskIndex)) {
        this.shuffle();
      } else {
        this.swapTaskPositionFromIndex(taskIndex, taskIndex-1);
      }
    }
  }
  moveDown(taskTitle) {
    let index = this._getIndexFromTitle(taskTitle);
    if (index) {
      if(this._isLast(index)){
        this.reverseShuffle();
      } else {
        this.swapTaskPositionFromIndex(index, index+1);
      }
    }
  }
  moveUp(taskTitle) {
    let index = this._getIndexFromTitle(taskTitle);
    if (index) {
      if(this._isFirst(index)) {
        this.shuffle();
      } else {
        this.swapTaskPositionFromIndex(index, index-1);
      }
    }
  }

  _isLast(index) {
    if (index === this.taskArray.length-1) {
      return true;
    }
    return false;
  }
  _isFirst(index) {
    return index === 0;
  }
  _getIndexFromTitle(taskTitle) {
    let index;
    for(let i = 0; i < this.taskArray.length; i++) {
      if (taskTitle === this.taskArray[i].title) {
        index = i;
        return index;
      }
    }
  }
}

class Task {
  constructor(title = 'untitled', description = 'basic task', owner = 'userID') {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.owner = owner;
    this.completedAt = null;
    this.createdAt = new Date();
    this.archivedAt = null;
    this.tags = [];
    this.classCategories =  [];
    this.references = [];
    this.requirements = [];
    this.priorities = [];
  }
  addGeneralTagsToTask(tagsArr, type) {
    //type is a string for what you want to add.
    // console.log(`Inside App.js - Task Class`);
    // console.log(tagsArr);
    if (tagsArr && type) {
      let destination;
      if (type === 'tags') {
        // console.log('matched tags');
        this.tags = this.tags.concat(tagsArr);
      } else if (type === 'classCategories') {
        // console.log('matched categories');
        this.classCategories = this.classCategories.concat(tagsArr);
      } else if (type === 'references') {
        // console.log('matched references');
        this.references = this.references.concat(tagsArr);
      } else if (type === 'requirements') {
        // console.log('matched requirements');
        this.requirements = this.requirements.concat(tagsArr);
      } else if (type === 'priorities') {
        // console.log('matched priorities');
        this.priorities = this.priorities.concat(tagsArr);
      } else {
        // console.log('No Match');
        destination = undefined;
      }
      // destination = destination.concat(tagsArr);
      // console.log('destination');
      // console.log(destination.concat(tagsArr));
    }
  }
  // set title(title) {
  //   this.title = title;
  // }
  // get title() {
  //   return this.title;
  // }
  // set description(des) {
  //   this.description = des;
  // }
  // get description() {
  //   return this.description;
  // }
  // set owner(name) {
  //   this.owner = name;
  // }
  // get owner() {
  //   return this.owner;
  // }
  // set completed(boo) {
  //   this.completed = boo;
  // }
  // get completed() {
  //   return this.completed;
  // }
}
