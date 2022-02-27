import React, {Component} from 'react';
import ListItem from './ListItem';
import UserInput from './UserInput';
import statusConstants from './constants/StatusConstants';
import './App.css';

class App extends Component {
  state = {
    toDo: [],
    inProgress: [],
    complete: [],
  }

  OnAddClick = (value) => {
    const { toDo } = this.state;
    this.setState({toDo: [...toDo, {value}]})
  }

  OnInProgressClick = (itemText, itemIndex, listType) => {
    const { toDo, inProgress, complete } = this.state;

    let originalToDo;
    let originalInProgress;
    let revisedToDo;
    let revisedInProgress;

      if (listType === statusConstants.TO_DO) {
        originalToDo = statusConstants.TO_DO
        revisedToDo = toDo.filter((element, index) => index !== itemIndex);
        
        originalInProgress = statusConstants.IN_PROGRESS
        revisedInProgress = [...inProgress, {value: itemText}];

      } if (listType === statusConstants.IN_PROGRESS) {
        originalToDo = statusConstants.IN_PROGRESS
        revisedToDo = inProgress.filter((element, index) => index !== itemIndex);
        
        originalInProgress = statusConstants.COMPLETE
        revisedInProgress = [...complete, {value: itemText}];

      }

    this.setState({[originalToDo]: revisedToDo});
    this.setState({[originalInProgress]: revisedInProgress});
    
  }

  render() {
    const { toDo, inProgress, complete } = this.state;

    console.log('Check To Do: ', toDo);
    console.log('Check In Progress: ', inProgress);
    console.log('Check Complete: ', complete);

    return (
      <div className='to-do-list'>
        <div className='to-do-list__title'>
          My To-Do List
        </div>
        <div>
          <UserInput OnAddButtonClick={this.OnAddClick} name='Jimothy' />
        </div>
        <div className='to-do-list__list'>
          <div className='to-do-list__to-do'>
            <div className='to-do-list__to-do-heading'>
              To-Do
            </div>
            <div className='to-do-list__to-do-listing'>
              {toDo.map((entry, index) => 
                <ListItem 
                  itemText={entry.value}
                  key={entry.value + index}
                  index={index}
                  listType={statusConstants.TO_DO}
                  onInProgressClick={this.OnInProgressClick}
                />
              )}
            </div>
          </div>
          <div className='to-do-list__in-progress'>
            <div className='to-do-list__in-progress-heading'>
              In Progress
            </div>
            <div className='to-do-list__in-progress-listing'>
              {inProgress.map((entry, index) => 
                <ListItem
                  itemText={entry.value}
                  key={entry.value + index}
                  index={index}
                  listType={statusConstants.IN_PROGRESS}
                  onInProgressClick={this.OnInProgressClick}/>)}
            </div>
          </div>
          <div className='to-do-list__complete'>
            <div className='to-do-list__complete-heading'>
              Complete
            </div>
            <div className='to-do-list__complete-listing'>
              {complete.map((entry, index) => 
                <ListItem
                  itemText={entry.value}
                  key={entry.value + index}
                  listType={statusConstants.COMPLETE}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
