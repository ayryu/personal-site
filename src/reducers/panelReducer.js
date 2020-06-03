const panelReducer = (state = [], action) => {
    switch (action.type) {
        case 'IS_PANEL_OPEN':
            return true;
        default:
            return state;
    }
  
  }