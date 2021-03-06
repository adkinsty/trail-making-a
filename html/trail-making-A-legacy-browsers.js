/*********************** 
 * Trail-Making-A Test *
 ***********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'trail-making-A';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(rngRoutineBegin());
flowScheduler.add(rngRoutineEachFrame());
flowScheduler.add(rngRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var thisExp;
var instructionsClock;
var instr_text;
var key_resp;
var trialClock;
var trialTargets;
var trialTargetLabels;
var trialLines;
var loopCounter;
var trialMouse;
var trialCursor;
var trialEndClock;
var results;
var round_num;
var key_resp_2;
var rngClock;
var rng_instr;
var rng_text;
var rng_resp;
var random_number;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  thisExp = psychoJS.experiment;
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: "There are numbers in circles on the next page. Please use your mouse to draw a line from one number to the next, in order. Start at 1, then go to 2, then go to 3, and so on. Please try not to take your hand off the mouse as you move from one number to the next. Work as quickly and accurately as you can.\n\nPress 'space' when you are ready to begin.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialTargets = [];
  trialTargetLabels = [];
  trialLines = [];
  loopCounter = 0;
  trialMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialMouse.mouseClock = new util.Clock();
  trialCursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trialCursor', 
    edges: 180, size:[0.001, 0.001],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "trialEnd"
  trialEndClock = new util.Clock();
  results = new visual.TextStim({
    win: psychoJS.window,
    name: 'results',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('orange'),  opacity: 1,
    depth: 0.0 
  });
  
  round_num = function(num, n=0) {    
      return +(Math.round(num + ("e+" + n))  + ("e-" + n));
  }
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rng"
  rngClock = new util.Clock();
  rng_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'rng_instr',
    text: 'This is your 4-digit completion code. Please write this down for later use. When you are finished, press SPACE to end the experiment. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  rng_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rng_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rng_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  random_number = Math.floor(Math.random() * 9999) + 1000;
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'setup'-------
    setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instr_text);
    instructionsComponents.push(key_resp);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(trialEndRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialEndRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialEndRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trialStep;
var steps;
var step;
var number_of_targets;
var allCoordinates;
var choiceCoordinates;
var makeLines;
var waitTime;
var PrevCursorTargetDistance;
var data_stimulusXPos;
var data_stimulusYPos;
var data_stimLabels;
var gotValidClick;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    loopCounter += 1;
    trialStep = 0;
    
    // Keep track of steps for the 
    steps = [];
    step = 0;
    number_of_targets = 25; // Change number of targets here
    
    trialTargets = [];
    trialTargetLabels = [];
    trialLines = [];
    
    // For creating unique labels
    // Class from https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters
    class StringIdGenerator {
      constructor(chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
        this._chars = chars;
        this._nextId = [0];
      }
    
      next() {
        const r = [];
        for (const char of this._nextId) {
          r.unshift(this._chars[char]);
        }
        this._increment();
        return r.join('');
      }
    
      _increment() {
        for (let i = 0; i < this._nextId.length; i++) {
          const val = ++this._nextId[i];
          if (val >= this._chars.length) {
            this._nextId[i] = 0;
          } else {
            return;
          }
        }
        this._nextId.push(0);
      }
    
      *[Symbol.iterator]() {
        while (true) {
          yield this.next();
        }
      }
    }
    
    const alphaID = new StringIdGenerator();
    
    // Improve on this algorithm
    allCoordinates = function() {
        var coordArray = [];
        var offset;
        var newX, newY;
    
        for ( var x = 0.5; x >= -0.5; x -= 0.1) {
            for ( var y = 0.4; y >= -0.4; y -=0.1 ) {
                
              // set distance to move the target
              offset = Math.random() * 2 * Math.PI;
              newX = x + 0.02 * Math.cos(offset);
              newY = y + 0.02 * Math.sin(offset);
              coordArray.push([newX, newY]);
            }
        }
        return coordArray;
    }
    .call(this);
    
    util.shuffle(allCoordinates);
    
    // How many targets are needed?
    choiceCoordinates = allCoordinates.slice(0, number_of_targets);
    
    // Make and label the targets
    for (var index in choiceCoordinates) { 
        trialTargets.push(
            new visual.Polygon({
                    win: psychoJS.window,
                    name: "trialTarget" + index,
                    edges: 30,
                    size: [0.05, 0.05],
                    ori: 0,
                    pos: choiceCoordinates[index],
                    lineWidth: 1,
                    lineColor: new util.Color([1, 1, 1]),
                    lineColorSpace: "rgb",
                    fillColor: new util.Color([1, 1, 1]),
                    fillColorSpace: "rgb",
                    opacity: 0.25,
                    interpolate: true,
                })
        );
        trialTargetLabels.push(
            new visual.TextStim({
                win: psychoJS.window,
                name: "label" + index,
                text: -1,
                font: 'Courier',
                pos: choiceCoordinates[index], height: 0.03, ori: 0,
                color: new util.Color('black'),  opacity: 1,
                depth: -1.0 
              })
        );
          trialTargetLabels[index].text = parseInt(index, 10) + 1;
    //    if (index % 2 == 0) {
    //        trialTargetLabels[index].text = parseInt(index, 10)/2 + 1;
    //    } else {
    //        trialTargetLabels[index].text = alphaID.next();
    //    }
    }
    
    makeLines = function() {
        for (var index = 0; index < (choiceCoordinates.length ); index++) {
            if ( index == 0 ) {
                trialLines.push(
                    new visual.ShapeStim({ 
                        win: psychoJS.window,
                        vertices: [ (0,0), (0,0) ],
                        opacity: 0,
                    })
                );
            } else {
                trialLines.push(
                    new visual.ShapeStim({ 
                        win: psychoJS.window,
                        vertices: [ trialTargets[index-1].pos, trialTargets[index].pos ],
                        opacity: 0,
                        lineWidth: 1,
                    })
                );
            }
        }
    }
    .call(this);
    
    // Function to delay before the the next routine runs
    waitTime = function (t) {
        const currentTime = globalClock.getTime();
        waitTime = function (a) {
            return currentTime + t;
        };
        return waitTime(0);
    };
    
    //CursorTargetDistance = function (trialStep) {
    //    var Xpos, Ypos;
    //    if (trialStep >= 0) {
    //        Xpos = trialTargets[trialStep].pos[0];
    //        Ypos = trialTargets[trialStep].pos[1];
    //    } else {
    //        Xpos = 0;
    //        Ypos = 0;
    //    }
    //    return Math.sqrt(
    //        Math.pow( (trialCursor.pos[0] - Xpos), 2 ) + 
    //        Math.pow( (trialCursor.pos[1] - Ypos), 2 )
    //    );
    //}
    
    PrevCursorTargetDistance = function (tstep) {
        
        if (tstep > 0) {
           return Math.sqrt(
                Math.pow( (trialCursor.pos[0] - trialTargets[tstep-1].pos[0]), 2 ) +
                Math.pow( (trialCursor.pos[1] - trialTargets[tstep-1].pos[1]), 2 )
            );
        } else {
           return Math.sqrt(
                Math.pow( trialCursor.pos[0], 2 ) +
                Math.pow( trialCursor.pos[1], 2 )
            );
        }
    }
    data_stimulusXPos = [];
    data_stimulusYPos = [];
    data_stimLabels = [];
    
    trialTargets.forEach( thisComponent => data_stimulusXPos.push(thisComponent.pos[0]) );
    trialTargets.forEach( thisComponent => data_stimulusYPos.push(thisComponent.pos[1]) );
    trialTargetLabels.forEach( thisComponent => data_stimLabels.push(thisComponent.text) );
    
    trialTargets.forEach( thisComponent => thisComponent.setAutoDraw(true) );
    trialTargetLabels.forEach( thisComponent => thisComponent.setAutoDraw(true) );
    trialLines.forEach( thisComponent => thisComponent.setAutoDraw(true) );
    // setup some python lists for storing info about the trialMouse
    // current position of the mouse:
    trialMouse.x = [];
    trialMouse.y = [];
    trialMouse.leftButton = [];
    trialMouse.midButton = [];
    trialMouse.rightButton = [];
    trialMouse.time = [];
    gotValidClick = false; // until a click is received
    trialMouse.mouseClock.reset();
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialMouse);
    trialComponents.push(trialCursor);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var CursorTargetDistance;
var incrementStepOnce;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    console.log(PrevCursorTargetDistance(trialStep-1));
    
    if ( trialStep < trialTargets.length ) {
        CursorTargetDistance = Math.sqrt(
            Math.pow( (trialCursor.pos[0] - trialTargets[trialStep].pos[0]), 2 ) +
            Math.pow( (trialCursor.pos[1] - trialTargets[trialStep].pos[1]), 2 )
        );
        
        // Check if the mouse left the previous cursor
        if ( trialStep <= 0 && (PrevCursorTargetDistance(trialStep) < trialTargets[trialStep].size[0]/2) ) {
            console.log("in old");
            console.log(trialStep);
            steps.push(trialStep);
        } else if ( trialStep > 0 && PrevCursorTargetDistance(trialStep) < trialTargets[trialStep-1].size[0]/2) {
            console.log("in old");
            console.log(trialStep);
            steps.push(trialStep);
        } else if ( CursorTargetDistance >= trialTargets[trialStep].size[0]/2 ) {
            console.log("going new");
            console.log(trialStep+0.5);
            steps.push(trialStep+0.5);
        } else if ( CursorTargetDistance < trialTargets[trialStep].size[0]/2 ) {
            console.log("in new");
            trialTargets[trialStep].opacity = 0;
            trialTargetLabels[trialStep].opacity = 0.25;
            trialLines[trialStep].opacity = 1;
            trialStep += 1;
            console.log(trialStep);
            steps.push(trialStep);
        }
    
    } else {
        
        if( globalClock.getTime() > waitTime(0.5) ) {
            continueRoutine = false;
        }
    }
    
    incrementStepOnce = function () {
        step = step + 0.5;
    } 
    // *trialMouse* updates
    if (t >= 0.0 && trialMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialMouse.tStart = t;  // (not accounting for frame time here)
      trialMouse.frameNStart = frameN;  // exact frame index
      
      trialMouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trialMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trialMouse.getPressed();
      _mouseXYs = trialMouse.getPos();
      trialMouse.x.push(_mouseXYs[0]);
      trialMouse.y.push(_mouseXYs[1]);
      trialMouse.leftButton.push(_mouseButtons[0]);
      trialMouse.midButton.push(_mouseButtons[1]);
      trialMouse.rightButton.push(_mouseButtons[2]);
      trialMouse.time.push(trialMouse.mouseClock.getTime());
    }
    
    // *trialCursor* updates
    if (t >= 0.0 && trialCursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCursor.tStart = t;  // (not accounting for frame time here)
      trialCursor.frameNStart = frameN;  // exact frame index
      
      trialCursor.setAutoDraw(true);
    }

    
    if (trialCursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialCursor.setPos([trialMouse.getPos()[0], trialMouse.getPos()[1]], false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    trialTargets.forEach( thisComponent => thisComponent.setAutoDraw(false) );
    trialTargetLabels.forEach( thisComponent => thisComponent.setAutoDraw(false) );
    trialLines.forEach( thisComponent => thisComponent.setAutoDraw(false) );
    
    psychoJS.experiment.addData("cumulativetime", globalClock.getTime());
    psychoJS.experiment.addData( "stimulusX", data_stimulusXPos);
    psychoJS.experiment.addData( "stimulusY", data_stimulusYPos);
    psychoJS.experiment.addData( "stimulusSymbol", data_stimLabels);
    psychoJS.experiment.addData( "steps", steps );
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trialMouse.x', trialMouse.x);
    psychoJS.experiment.addData('trialMouse.y', trialMouse.y);
    psychoJS.experiment.addData('trialMouse.leftButton', trialMouse.leftButton);
    psychoJS.experiment.addData('trialMouse.midButton', trialMouse.midButton);
    psychoJS.experiment.addData('trialMouse.rightButton', trialMouse.rightButton);
    psychoJS.experiment.addData('trialMouse.time', trialMouse.time);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var trialEndComponents;
function trialEndRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trialEnd'-------
    t = 0;
    trialEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    results.setText('Your time will be displayed here.');
    if ( loopCounter > 0 ) {
        results.text = "Total time: " + round_num(trialMouse.time[(trialMouse.time.length - 1)], 2).toString() + " s.\n Press 'space' to continue.";
    }
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    trialEndComponents = [];
    trialEndComponents.push(results);
    trialEndComponents.push(key_resp_2);
    
    trialEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialEndRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trialEnd'-------
    // get current time
    t = trialEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *results* updates
    if (t >= 0.0 && results.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      results.tStart = t;  // (not accounting for frame time here)
      results.frameNStart = frameN;  // exact frame index
      
      results.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialEndRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trialEnd'-------
    trialEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trialEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _rng_resp_allKeys;
var rngComponents;
function rngRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rng'-------
    t = 0;
    rngClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rng_text.setText(random_number);
    rng_resp.keys = undefined;
    rng_resp.rt = undefined;
    _rng_resp_allKeys = [];
    // keep track of which components have finished
    rngComponents = [];
    rngComponents.push(rng_instr);
    rngComponents.push(rng_text);
    rngComponents.push(rng_resp);
    
    rngComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function rngRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rng'-------
    // get current time
    t = rngClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rng_instr* updates
    if (t >= 0.0 && rng_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_instr.tStart = t;  // (not accounting for frame time here)
      rng_instr.frameNStart = frameN;  // exact frame index
      
      rng_instr.setAutoDraw(true);
    }

    
    // *rng_text* updates
    if (t >= 0.0 && rng_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_text.tStart = t;  // (not accounting for frame time here)
      rng_text.frameNStart = frameN;  // exact frame index
      
      rng_text.setAutoDraw(true);
    }

    
    // *rng_resp* updates
    if (t >= 0.0 && rng_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rng_resp.tStart = t;  // (not accounting for frame time here)
      rng_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rng_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rng_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rng_resp.clearEvents(); });
    }

    if (rng_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = rng_resp.getKeys({keyList: ['space'], waitRelease: false});
      _rng_resp_allKeys = _rng_resp_allKeys.concat(theseKeys);
      if (_rng_resp_allKeys.length > 0) {
        rng_resp.keys = _rng_resp_allKeys[_rng_resp_allKeys.length - 1].name;  // just the last key pressed
        rng_resp.rt = _rng_resp_allKeys[_rng_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    rngComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rngRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rng'-------
    rngComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rng_resp.keys', rng_resp.keys);
    if (typeof rng_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rng_resp.rt', rng_resp.rt);
        routineTimer.reset();
        }
    
    rng_resp.stop();
    // the Routine "rng" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
