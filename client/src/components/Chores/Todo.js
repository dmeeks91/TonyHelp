import React, {useState} from "react";
import AppInput from '../AppInput';

function Chore({chore, context}) {
  const {updateChore, removeChore} = context;

  const [c, setChore] = useState(chore)

  function handleCheckboxClick(completed) {
    setChore({
      ...c,
      isCompleted: completed
    })
    updateChore(chore, completed);
    // console.log(completed);
  }


  return (
      <AppInput
        addCheckBox={{
          checked:c.isCompleted,
          fx:handleCheckboxClick
        }}
        fields = {[
          { class: `choreItem`, text: chore.task}
        ]}
        text={chore.task}
        assignedTo={chore.users}
        onDelete={() => removeChore(chore._id)}
      />
  );
}

export default Chore;
