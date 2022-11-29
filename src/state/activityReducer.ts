interface initialActivityType {
  actionsList: string[] | [];
}

const initialActivity: initialActivityType = {
  actionsList: [],
};

interface AddAction {
  type: "ADD";
  payload: string;
}

interface RemoveAction {
  type: "REMOVE";
  payload: string;
}

type Action = AddAction | RemoveAction;
const activityReducer = (state = initialActivity, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        actionsList: [...state.actionsList, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        actionsList: [
          ...state.actionsList.filter((el) => el !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default activityReducer;

export type State = ReturnType<typeof activityReducer>;
